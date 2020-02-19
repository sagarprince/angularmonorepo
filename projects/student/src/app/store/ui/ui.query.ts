// Core
import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
// Model
import { UiState } from './ui.model';
// Store
import { UiStore } from './ui.store';

@Injectable({
    providedIn: 'root'
})
export class UiQuery extends Query<UiState> {
    constructor(protected uiStore: UiStore) {
        super(uiStore);
    }

    /**
     * Select Loading
     * @return Observable
     */
    public isLoading$ = this.selectLoading();

    /**
     * Select isSideNavOpened
     * @return Observable
     */
    public isSideNavOpened$ = this.select('isSideNavOpened');

    /**
     * Select Side Nav Mode
     * @return Observable
     */
    public sideNavMode$ = this.select('sideNavMode');
}