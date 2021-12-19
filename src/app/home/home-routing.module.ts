import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { IndexComponent } from './index/index.component';
import { InicioComponent } from './inicio/inicio.component';
import { LayoutComponent } from './layout/layout.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [{
  path:  '',
  component: LayoutComponent,
  children:[
    {
      path:'',
      component: InicioComponent,
    }
  ],
}
,
{
  path:'test',
  component: TestComponent,
  children:[
    {
      path:'',
      component: IndexComponent,
    }
  ],
}
,
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