// Core
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { tap, finalize, catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { resetStores } from '@datorama/akita';

// GraphQL
import { AdminLoginResponse } from 'generated/lms-graphql';
import { AdminLoginGQL, UpdateProfileGQL, UpdateAdminPasswordGQL } from './auth.graphql.service';

// Store
import { AuthStore } from './auth.store';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        private http: HttpClient,
        private authStore: AuthStore,
        private loginGQL: AdminLoginGQL,
        private updateProfileGQL: UpdateProfileGQL,
        private updateAdminPasswordGQL: UpdateAdminPasswordGQL,
        private router: Router
    ) { }

    /**
     * Login
     * @param creds 
     * @return Observable
     */
    public login(creds: any): Observable<any> {
        this.authStore.setLoading(true);
        return this.loginGQL.mutate({
            email: creds.email,
            password: creds.password
        }).pipe(
            map((response: any) => {
                const data: AdminLoginResponse = response.data.AdminLogin;
                return data;
            }),
            tap((data: AdminLoginResponse) => {
                const { id, email, firstName, lastName, role, status } = data.user;
                this.authStore.update({
                    token: data.accessToken,
                    refreshToken: data.refreshToken,
                    id,
                    email,
                    firstName,
                    lastName,
                    role,
                    status
                });
                return true;
            }),
            finalize(() => this.authStore.setLoading(false))
        );
    }

    /**
     * Refresh Token
     * @return Observable
     */
    public refreshToken(): Observable<any> {
        return this.http.post('/refresh-token', {
            token: this.authStore.getValue().refreshToken
        }).pipe(
            map((response: any) => {
                if (response && response.accessToken) {
                    return response;
                }
                return null;
            }),
            tap((data: any) => {
                if (data) {
                    this.authStore.update({
                        token: data.accessToken,
                        refreshToken: data.refreshToken,
                    });
                }
                return data;
            }),
            catchError((e) => {
                throw e;
            })
        );
    }

    /**
     * Update Profile
     * @param info 
     * @return Observable
     */
    public updateProfile(info: any): Observable<any> {
        this.authStore.setLoading(true);
        return this.updateProfileGQL.mutate({
            entity: info
        }).pipe(
            map((response: any) => {
                return response.data.UpdateAdminUser;
            }),
            tap((data: boolean) => {
                this.authStore.update(info);
                return data;
            }),
            finalize(() => this.authStore.setLoading(false))
        );
    }

    /**
     * Update Password
     * @param info 
     * @return Observable
     */
    public updatePassword(args: any): Observable<any> {
        this.authStore.setLoading(true);
        return this.updateAdminPasswordGQL.mutate({
            args
        }).pipe(
            map((response: any) => {
                return response.data.UpdateAdminPassword;
            }),
            finalize(() => this.authStore.setLoading(false))
        );
    }

    /**
     * Logout
     * @return void
     */
    public logout(): void {
        this.authStore.update({ token: '' });
        resetStores({ exclude: ['auth'] });
        this.router.navigate(["/auth/login"]);
        setTimeout(() => {
            this.authStore.reset();
        }, 800);
    }
}