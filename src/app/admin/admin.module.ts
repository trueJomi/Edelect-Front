import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { NewCarreraComponent } from './carrera/new-carrera/new-carrera.component';
import { EditCarreraComponent } from './carrera/edit-carrera/edit-carrera.component';
import { ListCarreraComponent } from './carrera/list-carrera/list-carrera.component';
import { MaterialModule } from '../material/material.module';
import { SugerenciasUniversityComponent } from './sugerencias-university/sugerencias-university.component';
import { TestListComponent } from './tests/test-list/test-list.component';
import { NewTestComponent } from './tests/new-test/new-test.component';
import { EditTestComponent } from './tests/edit-test/edit-test.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NewEgresadoComponent } from './egresado/new-egresado/new-egresado.component';
import { ListEgresadoComponent } from './egresado/list-egresado/list-egresado.component';
import { UpdateEgresadoComponent } from './egresado/edit-egresado/update-egresado.component';
import { EditUniversidadComponent } from './universidad/edit-universidad/edit-universidad.component';
import { NewUniversidadComponent } from './universidad/new-universidad/new-universidad.component';
import { ListUniversidadComponent } from './universidad/list-universidad/list-universidad.component';
import { NewSedeComponent } from './sede/new-sede/new-sede.component';
import { ListSedeComponent } from './sede/list-sede/list-sede.component';
import { EditSedeComponent } from './sede/edit-sede/edit-sede.component';
import { FormCarreraComponent } from './carrera/shared/form-carrera/form-carrera.component';
import { FormEgresadoComponent } from './egresado/shared/form-egresado/form-egresado.component';
import { FormSedeComponent } from './sede/shared/form-sede/form-sede.component';
import { FormUniversidadComponent } from './universidad/shared/form-universidad/form-universidad.component';
import {MatSelectModule} from "@angular/material/select";
import {MatDividerModule} from "@angular/material/divider";


@NgModule({
  declarations: [
    LayoutComponent,
    NewCarreraComponent,
    EditCarreraComponent,
    ListCarreraComponent,
    SugerenciasUniversityComponent,
    TestListComponent,
    NewTestComponent,
    EditTestComponent,
    NewEgresadoComponent,
    ListEgresadoComponent,
    UpdateEgresadoComponent,
    EditUniversidadComponent,
    NewUniversidadComponent,
    ListUniversidadComponent,
    NewSedeComponent,
    ListSedeComponent,
    EditSedeComponent,
    FormCarreraComponent,
    FormEgresadoComponent,
    FormSedeComponent,
    FormUniversidadComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatDividerModule
  ]
})
export class AdminModule { }
