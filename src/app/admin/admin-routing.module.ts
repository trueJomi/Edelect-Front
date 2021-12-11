import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { SugerenciasUniversityComponent } from './sugerencias-university/sugerencias-university.component';
import {NewTestComponent} from "./tests/new-test/new-test.component";
import {TestListComponent} from "./tests/test-list/test-list.component";
import { UniversidadModule } from './universidad/universidad.module';


const routes: Routes = [

  {
    path: 'test',
    component: LayoutComponent,
    children:[
      {
        path:'list',
        component:TestListComponent,
      },
      {
        path:'new',
        component:NewTestComponent,
      },
    ]
  }
  ,
  {
    path:'sugerencias',
    component:SugerenciasUniversityComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }