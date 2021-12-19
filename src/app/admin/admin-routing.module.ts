import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { SugerenciasUniversityComponent } from './sugerencias-university/sugerencias-university.component';
import { PlantillaComponent } from './tests/plantilla/plantilla.component';
import {TestListComponent} from "./tests/test-list/test-list.component";
import { ThisTestComponent } from './tests/this-test/this-test.component';


const routes: Routes = [
  {
    path: 'test',
    component: LayoutComponent,
    children:[
      {
        path:'',
        component:TestListComponent,
      },
      {
        path:'plantilla',
        component:PlantillaComponent,
      },
      {
        path:'test/:id',
        component:ThisTestComponent,
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