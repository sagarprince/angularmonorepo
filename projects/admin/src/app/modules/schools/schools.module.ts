// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing Module
import { SchoolsRoutingModule } from './schools-routing.module';

// Components
import { SchoolsComponent } from './components/schools/schools.component';

@NgModule({
  imports: [
    CommonModule,
    SchoolsRoutingModule
  ],
  declarations: [SchoolsComponent]
})
export class SchoolsModule { }
