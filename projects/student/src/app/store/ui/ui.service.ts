// Core
import { Injectable } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MediaMatcher, BreakpointObserver } from '@angular/cdk/layout';
// Store
import { UiStore } from './ui.store';

@Injectable({
    providedIn: 'root'
})
export class UiService {
    public onDestroy = new Subject<void>();
    private mediaQuery: string = '(max-width: 600px)';

    constructor(
        private uiStore: UiStore,
        private router: Router,
        private bpObservar: BreakpointObserver,
        private media: MediaMatcher
    ) {
        const isSmallScreen = this.bpObservar.isMatched(this.mediaQuery);
        if (isSmallScreen) {
            this.sidenNavOnSmallScreen();
        }
        this.media.matchMedia(this.mediaQuery).addListener((event) => {
            if (event.matches) {
                this.sidenNavOnSmallScreen();
            } else {
                this.sidenNavOnBigScreen();
            }
        });
    }

    /**
     * On Routes Changed Subscription
     * @return void
     */
    public onRoutesChanged(): void {
        this.router.events.pipe(takeUntil(this.onDestroy)).subscribe(event => {
            if (event instanceof RouteConfigLoadStart) {
                this.uiStore.setLoading(true);
            } else if (event instanceof RouteConfigLoadEnd) {
                this.uiStore.setLoading(false);
            }
        });
    }

    /**
     * Toggle SideNav
     * @return void
     */
    public toggleSideNav(): void {
        this.uiStore.update({ isSideNavOpened: !this.uiStore.getValue().isSideNavOpened });
    }

    /**
     * Change SideNav Mode on Screen Size
     * @return void
     */
    private sidenNavOnSmallScreen(): void {
        this.uiStore.update({ isSideNavOpened: false, sideNavMode: 'over' });
    }

    /**
     * Change SideNav Mode on Screen Size
     * @return void
     */
    private sidenNavOnBigScreen(): void {
        this.uiStore.update({ sideNavMode: 'side' });
    }
}