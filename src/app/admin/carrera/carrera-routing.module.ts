import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { EditCarreraComponent } from './edit-carrera/edit-carrera.component';
import { ListCarreraComponent } from './list-carrera/list-carrera.component';
import { NewCarreraComponent } from './new-carrera/new-carrera.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'universidad',
        component:ListCarreraComponent,
      },
      {
        path:'universidad/new',
        component:NewCarreraComponent,
      },
      {
        path:'universidad/:name/edit',
        component:EditCarreraComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarreraRoutingModule { }
