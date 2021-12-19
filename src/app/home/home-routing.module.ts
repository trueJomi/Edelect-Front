import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { UniversidadListComponent } from './comparativa/universidad-list/universidad-list.component';
import { IndexComponent } from './index/index.component';
import { InicioComponent } from './inicio/inicio.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [{
  path:  '',
  children:[
    {
      path:'',
      component: InicioComponent,
    }
  ],
},
{
  path:'comentarios',
  component:ComentariosComponent,
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
