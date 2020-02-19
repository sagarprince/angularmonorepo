// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing Module
import { TutorsRoutingModule } from './tutors-routing.module';

// Components
import { TutorsComponent } from './components/tutors/tutors.component';

@NgModule({
  imports: [
    CommonModule,
    TutorsRoutingModule
  ],
  declarations: [TutorsComponent]
})
export class TutorsModule { }
