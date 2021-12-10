import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversidadRoutingModule } from './universidad-routing.module';
import { EditCarreraComponent } from './edit-carrera/edit-carrera.component';
import { ListCarreraComponent } from './list-carrera/list-carrera.component';
import { NewCarreraComponent } from './new-carrera/new-carrera.component';
import { NewUniversidadComponent } from './new-universidad/new-universidad.component';
import { ListUniversidadComponent } from './list-universidad/list-universidad.component';
import { EditUniversidadComponent } from './edit-universidad/edit-universidad.component';


@NgModule({
  declarations: [
    EditCarreraComponent,
    ListCarreraComponent,
    NewCarreraComponent,
    NewUniversidadComponent,
    ListUniversidadComponent,
    EditUniversidadComponent
  ],
  imports: [
    CommonModule,
    UniversidadRoutingModule
  ]
})
export class UniversidadModule { }
