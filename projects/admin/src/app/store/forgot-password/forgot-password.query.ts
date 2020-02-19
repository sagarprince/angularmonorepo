// Core
import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
// Model
import { ForgotPasswordState } from './forgot-password.model';
// Store
import { ForgotPasswordStore } from './forgot-password.store';

@Injectable({
    providedIn: 'root'
})
export class ForgotPasswordQuery extends Query<ForgotPasswordState> {
    constructor(protected forgotPasswordStore: ForgotPasswordStore) {
        super(forgotPasswordStore);
    }

    /**
     * Select Loading
     * @return Observable
     */
    public isLoading$ = this.selectLoading();

   /**
    * Get Is User Id Exist
    * @return boolean
    */
    get isUserIdExist(): boolean {
        return this.getValue().id > -1 ? true : false;
    }

    /**
     * Select Resend OTP Loading
     * @return Observable
     */
    public isResendOTPLoading$ = this.select('isResendOTPLoading');
}