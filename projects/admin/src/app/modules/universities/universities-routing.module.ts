// Core
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { UniversitiesComponent } from './components/universities/universities.component';

const routes: Routes = [
    {
        path: '',
        component: UniversitiesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UniversitiesRoutingModule { }
