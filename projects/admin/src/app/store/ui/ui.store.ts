// Core
import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
// Models
import { UiState } from './ui.model';

/**
 * Create Initial Store State
 * @return UiState
 */
export function createInitialState(): UiState {
    return {
        isLoading: false,
        sideNavMode: 'side', // over, side
        isSideNavOpened: true
    };
}

/**
 * Config UiStore
 */
@Injectable({
    providedIn: 'root'
})
@StoreConfig({ name: 'ui', resettable: true })
export class UiStore extends Store<UiState> {
    constructor() {
        super(createInitialState());
    }
}