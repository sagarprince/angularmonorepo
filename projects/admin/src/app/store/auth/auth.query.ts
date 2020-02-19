// Core
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Query } from '@datorama/akita';
// Model
import { AuthState } from './auth.model';
import { ProfileInfo } from '../../shared/models';
// Store
import { AuthStore } from './auth.store';

@Injectable({
    providedIn: 'root'
})
export class AuthQuery extends Query<AuthState> {
    constructor(protected authStore: AuthStore) {
        super(authStore);
    }

    /**
     * Select Loading
     * @return Observable
     */
    public isLoading$ = this.selectLoading();

    /**
     * Select Access Token
     * @return Observable
     */
    public accessToken$ = this.select('token');

    /**
    * Get Is Logged In
    * @return boolean
    */
    isLoggedIn() {
        return !!this.getValue().token;
    }

    /**
     * Get Access Token
     * @return string
     */
    get accessToken(): string {
        return this.getValue().token;
    }

    /**
     * Get Refresh Token
     * @return string
     */
    get refreshToken(): string {
        return this.getValue().refreshToken;
    }

    /**
     * Get User Full Name
     * @return Observable
     */
    public getUserFullName(): Observable<any> {
        return this.select(['firstName', 'lastName']).pipe(
            map((data) => {
                if (data) {
                    return data.firstName + ' ' + data.lastName;
                }
                return 'Unknown';
            })
        );
    }

    /**
     * Get Role
     * @return string
     */
    get role(): string {
        return this.getValue().role;
    }


    /**
     * Get User Profile Info
     * @return User
     */
    get profileInfo(): ProfileInfo {
        return {
            id: this.getValue().id,
            email: this.getValue().email,
            firstName: this.getValue().firstName,
            lastName: this.getValue().lastName,
            role: this.getValue().role,
            status: this.getValue().status
        };
    }
}