import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarreraRoutingModule } from './carrera-routing.module';
import { NewCarreraComponent } from './new-carrera/new-carrera.component';
import { EditCarreraComponent } from './edit-carrera/edit-carrera.component';
import { ListCarreraComponent } from './list-carrera/list-carrera.component';
import { SharedComponent } from './shared/shared.component';


@NgModule({
  declarations: [
    NewCarreraComponent,
    EditCarreraComponent,
    ListCarreraComponent,
    SharedComponent
  ],
  imports: [
    CommonModule,
    CarreraRoutingModule
  ]
})
export class CarreraModule { }
