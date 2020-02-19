// Core
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { FacultiesComponent } from './components/faculties/faculties.component';

const routes: Routes = [
    {
        path: '',
        component: FacultiesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FacultiesRoutingModule { }
