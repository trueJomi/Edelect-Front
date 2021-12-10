import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { CarreraComponent } from './carrera/carrera.component';
import { NewCarreraComponent } from './carrera/new-carrera/new-carrera.component';
import { EditCarreraComponent } from './carrera/edit-carrera/edit-carrera.component';
import { ListCarreraComponent } from './carrera/list-carrera/list-carrera.component';
import { DeleteCarreraComponent } from './carrera/delete-carrera/delete-carrera.component';
import { MaterialModule } from '../material/material.module';
import { SugerenciasUniversityComponent } from './sugerencias-university/sugerencias-university.component';
import { TestListComponent } from './tests/test-list/test-list.component';
import { NewTestComponent } from './tests/new-test/new-test.component';
import { EditTestComponent } from './tests/edit-test/edit-test.component';



@NgModule({
  declarations: [

    LayoutComponent,
    CarreraComponent,
    NewCarreraComponent,
    EditCarreraComponent,
    ListCarreraComponent,
    DeleteCarreraComponent,
    SugerenciasUniversityComponent,
    TestListComponent,
    NewTestComponent,
    EditTestComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule

  ]
})
export class AdminModule { }
