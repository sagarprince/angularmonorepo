// Core
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap, finalize, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

// GraphQL
import { AdminAuth } from 'generated/lms-graphql';
import { AdminSendOtpGQL, AdminResendOtpGQL, AdminResetPasswordGQL } from './forgot-password.graphql.service';

// Store
import { ForgotPasswordStore } from './forgot-password.store';

@Injectable({
    providedIn: 'root'
})
export class ForgotPasswordService {
    constructor(
        private forgotPasswordStore: ForgotPasswordStore,
        private adminSendOtpGQL: AdminSendOtpGQL,
        private adminResendOtpGQL: AdminResendOtpGQL,
        private adminResetPasswordGQL: AdminResetPasswordGQL,
        private router: Router
    ) { }

    /**
     * On Send OTP
     * @param email 
     * @return Observable
     */
    public sendOTP(email: string): Observable<any> {
        this.forgotPasswordStore.setLoading(true);
        return this.adminSendOtpGQL.mutate({
            email: email
        }).pipe(
            map((response: any) => {
                const data: AdminAuth = response.data.AdminSendOTP;
                return data;
            }),
            tap((data: AdminAuth) => {
                const { id, email, firstName, lastName, status } = data;
                this.forgotPasswordStore.update({
                    id,
                    email,
                    firstName,
                    lastName,
                    status
                });
                return true;
            }),
            finalize(() => this.forgotPasswordStore.setLoading(false))
        );
    }

    /**
     * Resend OTP
     * @return Observable
     */
    public resendOTP(): Observable<any> {
        this.forgotPasswordStore.update({ isResendOTPLoading: true });
        return this.adminResendOtpGQL.mutate({
            id: this.forgotPasswordStore.getValue().id,
            email: this.forgotPasswordStore.getValue().email
        }).pipe(
            map((response: any) => {
                return response.data.AdminResendOTP;
            }),
            finalize(() => this.forgotPasswordStore.update({ isResendOTPLoading: false }))
        );
    }

    /**
     * Reset Password
     * @param otp
     * @param newPassword 
     * @return Observable
     */
    public resetPassword(otp: string, newPassword: string): Observable<any> {
        this.forgotPasswordStore.setLoading(true);
        return this.adminResetPasswordGQL.mutate({
            args: {
                email: this.forgotPasswordStore.getValue().email,
                otp,
                newPassword
            }
        }).pipe(
            map((response: any) => {
                return response.data.AdminResetPassword;
            }),
            tap((data: any) => {
                this.forgotPasswordStore.reset();
                return data;
            }),
            finalize(() => this.forgotPasswordStore.setLoading(false))
        );
    }
}