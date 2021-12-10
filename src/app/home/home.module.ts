import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './index/index.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material/material.module';
import { LoginComponent } from './layout/login/login.component';
import { LogoutComponent } from './layout/logout/logout.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { ArticleComponent } from './comentarios/article/article.component';
import { SugerenciasUniversityComponent } from './sugerencias-university/sugerencias-university.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    IndexComponent,
    LayoutComponent,
    LoginComponent,
    LogoutComponent,
    ComentariosComponent,
    ArticleComponent,
    SugerenciasUniversityComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
