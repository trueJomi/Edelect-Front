import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCarreraComponent } from '../carrera/edit-carrera/edit-carrera.component';
import { LayoutComponent } from '../layout/layout.component';
import { ListUniversidadComponent } from './list-universidad/list-universidad.component';
import { NewUniversidadComponent } from './new-universidad/new-universidad.component';

const routes: Routes = [
  {
    path:'universidad',
    component:ListUniversidadComponent,
    children:[
      {
        path:'universidad',
        component:ListUniversidadComponent,
      },
      {
        path:'universidad/new',
        component:NewUniversidadComponent,
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
export class UniversidadRoutingModule { }
