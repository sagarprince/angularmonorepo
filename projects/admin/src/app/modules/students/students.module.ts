// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing Module
import { StudentsRoutingModule } from './students-routing.module';

// Components
import { StudentsComponent } from './components/students/students.component';

@NgModule({
  imports: [
    CommonModule,
    StudentsRoutingModule
  ],
  declarations: [StudentsComponent]
})
export class StudentsModule { }
