// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing Module
import { DashboardRoutingModule } from './dashboard-routing.module';

// Components
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent],
  providers: []
})
export class DashboardModule { }
