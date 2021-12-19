import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { UniversidadListComponent } from './comparativa/universidad-list/universidad-list.component';
import { IndexComponent } from './index/index.component';
import { SugerenciasUniversityComponent } from './sugerencias-university/sugerencias-university.component';

const routes: Routes = [{
  path:  '',
  children:[
    {
      path:'',
      component: IndexComponent,
    }
  ],
},
{
  path:'comentarios',
  component:ComentariosComponent,
},
{
  path:'sugerencias',
  component:SugerenciasUniversityComponent,
},

{
  path:'comparativas',
  component: UniversidadListComponent,
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
