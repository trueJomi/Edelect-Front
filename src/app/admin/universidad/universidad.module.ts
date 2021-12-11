import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversidadRoutingModule } from './universidad-routing.module';

import { NewUniversidadComponent } from './new-universidad/new-universidad.component';
import { ListUniversidadComponent } from './list-universidad/list-universidad.component';
import { EditUniversidadComponent } from './edit-universidad/edit-universidad.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [
    
    NewUniversidadComponent,
    ListUniversidadComponent,
    EditUniversidadComponent
  ],
  imports: [
    CommonModule,
    UniversidadRoutingModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class UniversidadModule { }
