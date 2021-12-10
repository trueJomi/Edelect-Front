import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EgresadoRoutingModule } from './egresado-routing.module';
import { NewEgresadoComponent } from './new-egresado/new-egresado.component';
import { EditEgresadoComponent } from './edit-egresado/edit-egresado.component';
import { ListEgresadoComponent } from './list-egresado/list-egresado.component';


@NgModule({
  declarations: [
    NewEgresadoComponent,
    EditEgresadoComponent,
    ListEgresadoComponent
  ],
  imports: [
    CommonModule,
    EgresadoRoutingModule
  ]
})
export class EgresadoModule { }
