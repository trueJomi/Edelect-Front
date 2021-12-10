import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarreraListComponent } from './Carrera/carrera-list/carrera-list.component';
import { EditCarreraComponent } from './Carrera/edit-carrera/edit-carrera.component';
import { NewCarreraComponent } from './Carrera/new-carrera/new-carrera.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'Carrera',
        component:CarreraListComponent,
      },
      {
        path:'Carrera/new',
        component:NewCarreraComponent,
      },
      {
        path:'Carrera/:name/edit',
        component:EditCarreraComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
