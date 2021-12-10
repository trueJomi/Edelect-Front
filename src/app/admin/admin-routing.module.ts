import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SugerenciasUniversityComponent } from './sugerencias-university/sugerencias-university.component';

const routes: Routes = [
  {
    path:'sugerencias',
    component:SugerenciasUniversityComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }