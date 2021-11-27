import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './index/index.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedComponent } from './shared/shared.component';
import { MaterialModule } from '../material/material.module';
import { LoginComponent } from './layout/login/login.component';
import { LogoutComponent } from './layout/logout/logout.component';


@NgModule({
  declarations: [
    IndexComponent,
    LayoutComponent,
    SharedComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
