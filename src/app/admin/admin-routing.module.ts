import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SugerenciasUniversityComponent } from './sugerencias-university/sugerencias-university.component';
import {LayoutComponent} from "./layout/layout.component";
import {ListSedeComponent} from "./sede/list-sede/list-sede.component";
import {NewSedeComponent} from "./sede/new-sede/new-sede.component";
import {EditSedeComponent} from "./sede/edit-sede/edit-sede.component";
import {ListEgresadoComponent} from "./egresado/list-egresado/list-egresado.component";
import {NewEgresadoComponent} from "./egresado/new-egresado/new-egresado.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'sedes',
        component: ListSedeComponent,
      },
      {
        path: 'sedes/new',
        component: NewSedeComponent,
      },
      {
        path: 'sedes/:id/editar',
        component: EditSedeComponent,
      },
      {
        path: 'egresados',
        component: ListEgresadoComponent,
      },
      {
        path: 'egresados/new',
        component: NewEgresadoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
