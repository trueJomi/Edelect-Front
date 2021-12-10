import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material/material.module';
import { UniversidadComponent } from './universidad/universidad.component';
import { NewUniversidadComponent } from './Universidad/new-universidad/new-universidad.component';
import { ListUniversidadComponent } from './Universidad/list-universidad/list-universidad.component';
import { EditUniversidadComponent } from './Universidad/edit-universidad/edit-universidad.component';




@NgModule({
  declarations: [
    
    LayoutComponent,
    UniversidadComponent,
    NewUniversidadComponent,
    ListUniversidadComponent,
    EditUniversidadComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
    
  ]
})
export class AdminModule { }
