import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SugerenciasUniversityComponent } from './sugerencias-university/sugerencias-university.component';
import {NewTestComponent} from "./tests/new-test/new-test.component";
import {TestListComponent} from "./tests/test-list/test-list.component";


const routes: Routes = [
  {
    path:'sugerencias',
    component:SugerenciasUniversityComponent,
  },
  {
    path:'test/new',
    component:NewTestComponent,
  },
  {
    path:'testList',
    component:TestListComponent,
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
