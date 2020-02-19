// Core
import { Injectable } from '@angular/core';
// Menu Routes
import { MENU_ROUTES } from '../menu-routes';
// Models
import { MenuItem } from '../../shared/models';
// Store
import { AuthQuery } from '../../store/auth/auth.query';

@Injectable({
    providedIn: 'root'
})
export class MenusService {
    constructor(
        private authQuery: AuthQuery
    ) { }

    get menus(): Array<MenuItem> {
        const userRole = this.authQuery.role;
        return MENU_ROUTES.map((m) => {
            const roles = (m.data.roles || []) as Array<string>;
            return {
                path: '/' + m.path,
                title: m.title,
                iconType: m.iconType,
                icon: m.icon,
                show: roles.indexOf(userRole) > -1 ? true : false,
                isSideMenu: m.isSideMenu
            }
        }).filter((m) => m.isSideMenu === true)
    }
}
