// Core
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { TutorsComponent } from './components/tutors/tutors.component';

const routes: Routes = [
    {
        path: '',
        component: TutorsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TutorsRoutingModule { }
