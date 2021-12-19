import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SedeRoutingModule } from './sede-routing.module';
import { NewSedeComponent } from './new-sede/new-sede.component';
import { EditSedeComponent } from './edit-sede/edit-sede.component';
import { ListSedeComponent } from './list-sede/list-sede.component';


@NgModule({
  declarations: [
    NewSedeComponent,
    EditSedeComponent,
    ListSedeComponent
  ],
  imports: [
    CommonModule,
    SedeRoutingModule
  ]
})
export class SedeModule { }
