// Core
import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
// Models
import { ForgotPasswordState } from './forgot-password.model';

/**
 * Create Initial Store State
 * @return ForgotPasswordState
 */
export function createInitialState(): ForgotPasswordState {
    return {
        id: -1,
        isResendOTPLoading: false
    };
}

/**
 * Config ForgotPasswordStore
 */
@Injectable({
    providedIn: 'root'
})
@StoreConfig({ name: 'forgot-password', resettable: true })
export class ForgotPasswordStore extends Store<ForgotPasswordState> {
    constructor() {
        super(createInitialState());
    }
}