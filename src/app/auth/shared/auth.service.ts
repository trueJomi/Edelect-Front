import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private htt:HttpClientModule) { }
  
  login():void{

  }

  logout():void{

  }

  private handleError(){

  }
}
