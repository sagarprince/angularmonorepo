// Core
import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
// Models
import { AuthState } from './auth.model';

/**
 * Create Initial Store State
 * @return AuthState
 */
export function createInitialState(): AuthState {
    return {
        token: '',
        refreshToken: '',
        id: ''
    };
}

/**
 * Config AuthStore
 */
@Injectable({
    providedIn: 'root'
})
@StoreConfig({ name: 'auth', resettable: true })
export class AuthStore extends Store<AuthState> {
    constructor() {
        super(createInitialState());
    }
}