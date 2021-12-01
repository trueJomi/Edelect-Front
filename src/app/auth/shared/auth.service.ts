import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from './usuario.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiBase: string = environment.apiBase;

  constructor(private http: HttpClient) {}

  // login(usuario: Usuario) {
  //   return this.http
  //     .post<number>(`${this.apiBase}/usuarios/login`, usuario)
  //     .pipe((
  //       map((res:number)=>{
  //         console.log(res)
  //         this.saveToken
  //       }),catchError((err)=>this.handleError(err))
  //     ));
  // }

  logout(): void {}

  private saveToken():void{

  }

  private readToken():void{
    
  }

  // private handleError(err):Observable<never> {
  //   let errorMesage ="Ha ocurrido un erro conlos datos"
  //   window.alert(errorMesage);
  //   return throwError(errorMesage)
  // }
}
