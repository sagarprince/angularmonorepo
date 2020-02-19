// Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Enviornment
import { environment } from '../../environments/environment';

// DevTools
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';

// Akita Store Router Module
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';

// GraphQL Module
import { GraphQLModule } from '../graphql/graphql.module';

// Routing Module
import { RootRoutingModule } from './root-routing.module';

// Material Modules
import { MatMenuModule, MatIconModule, MatSidenavModule } from '@angular/material';

// Modules
import { LMSCommonModule } from '@lms/common';
import { SharedModule } from '../shared/shared.module';

// Components
import { RootComponent } from './root.component';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AkitaNgRouterStoreModule,
    RootRoutingModule,
    GraphQLModule,
    MatMenuModule, 
    MatIconModule,
    MatSidenavModule,
    LMSCommonModule,
    SharedModule.forRoot(),
    environment.production ? [] : AkitaNgDevtools.forRoot()
  ],
  declarations: [
    RootComponent,
    LayoutComponent,
    PageNotFoundComponent,
    HeaderComponent,
    SidebarComponent
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }
