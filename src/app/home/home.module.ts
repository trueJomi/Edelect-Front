import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './index/index.component';
import { MaterialModule } from '../material/material.module';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { ArticleComponent } from './comentarios/article/article.component';
import { TestComponent } from './test/test.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InicioComponent } from './inicio/inicio.component';


@NgModule({
  declarations: [
    IndexComponent,
    ComentariosComponent,
    ArticleComponent,
    TestComponent,
    InicioComponent,
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    FontAwesomeModule,
  ]
})
export class HomeModule { }
