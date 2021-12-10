import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversidadRoutingModule } from './universidad-routing.module';

import { NewUniversidadComponent } from './new-universidad/new-universidad.component';
import { ListUniversidadComponent } from './list-universidad/list-universidad.component';
import { EditUniversidadComponent } from './edit-universidad/edit-universidad.component';


@NgModule({
  declarations: [
    
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
