// Core
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { SchoolsComponent } from './components/schools/schools.component';

const routes: Routes = [
    {
        path: '',
        component: SchoolsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SchoolsRoutingModule { }
