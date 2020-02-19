// Core
import { Injectable } from '@angular/core';
// Menu Routes
import { MENU_ROUTES } from '../menu-routes';
// Models
import { MenuItem } from '../../shared/models';
// Store
// import { AuthQuery } from '../../store/auth/auth.query';

@Injectable({
    providedIn: 'root'
})
export class MenusService {
    constructor() { }

    get menus(): Array<MenuItem> {
        return MENU_ROUTES.map((m) => {
            return {
                path: '/' + m.path,
                title: m.title,
                iconType: m.iconType,
                icon: m.icon,
                isSideMenu: m.isSideMenu
            }
        }).filter((m) => m.isSideMenu === true)
    }
}
