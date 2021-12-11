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
import {ReactiveFormsModule} from "@angular/forms";
import { NewEgresadoComponent } from './egresado/new-egresado/new-egresado.component';
import { ListEgresadoComponent } from './egresado/list-egresado/list-egresado.component';
import { UpdateEgresadoComponent } from './egresado/edit-egresado/update-egresado.component';


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
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
