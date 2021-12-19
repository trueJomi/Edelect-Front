import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {ListEgresadoComponent} from "./egresado/list-egresado/list-egresado.component";
import {NewEgresadoComponent} from "./egresado/new-egresado/new-egresado.component";
import {ListCarreraComponent} from "./carrera/list-carrera/list-carrera.component";
import {NewCarreraComponent} from "./carrera/new-carrera/new-carrera.component";
import {UpdateEgresadoComponent} from "./egresado/edit-egresado/update-egresado.component";
import {EditCarreraComponent} from "./carrera/edit-carrera/edit-carrera.component";
import {ListUniversidadComponent} from "./universidad/list-universidad/list-universidad.component";
import {NewUniversidadComponent} from "./universidad/new-universidad/new-universidad.component";
import {EditUniversidadComponent} from "./universidad/edit-universidad/edit-universidad.component";
import {ListSedeComponent} from "./sede/list-sede/list-sede.component";
import {NewSedeComponent} from "./sede/new-sede/new-sede.component";
import {EditSedeComponent} from "./sede/edit-sede/edit-sede.component";
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
      {
        path: 'egresados/:id/editar',
        component: UpdateEgresadoComponent,
      },

      {
        path: 'carreras',
        component: ListCarreraComponent,
      },
      {
        path: 'carreras/new',
        component: NewCarreraComponent,
      },
      {
        path: 'carreras/:id/editar',
        component: EditCarreraComponent,
      },
      {
        path: 'universidades',
        component: ListUniversidadComponent,
      },
      {
        path: 'universidades/new',
        component: NewUniversidadComponent,
      },
      {
        path: 'universidades/:id/editar',
        component: EditUniversidadComponent,
      },


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

