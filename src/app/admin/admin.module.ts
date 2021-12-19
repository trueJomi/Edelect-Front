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
import { FormTestComponent } from './tests/shared/form-test/form-test.component';
import { PlantillaComponent } from './tests/plantilla/plantilla.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FromPlantillaComponent } from './tests/shared/from-plantilla/from-plantilla.component';
import { ListPlantillaComponent } from './tests/list-plantilla/list-plantilla.component';


@NgModule({
  declarations: [
    LayoutComponent,
    NewCarreraComponent,
    EditCarreraComponent,
    ListCarreraComponent,
    SugerenciasUniversityComponent,
    TestListComponent,
    FormTestComponent,
    PlantillaComponent,
    FromPlantillaComponent,
    ListPlantillaComponent,
   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FontAwesomeModule,
  ]
})
export class AdminModule { }
