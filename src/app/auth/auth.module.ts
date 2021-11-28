import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material/material.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FoundComponent } from './found/found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    FoundComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    FontAwesomeModule,
  ]
})
export class AuthModule { 

  faPencilAlt= faPencilAlt;
}
