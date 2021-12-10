import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
=======
// @ts-ignore
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
>>>>>>> abc6979ede60f22b9e3d6430b28cf47f86341388

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }