import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Carrera, Test} from "./test.model";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private controller:string='/test'
  private apiBase:string=environment.apiBase;
  constructor(private http:HttpClient) { }

  getAllTest(){
    return this.http.get<Test[]>(`${this.apiBase}${this.controller}`);
  }

  buscarTestByUser(user:string){
    return this.http.get<Test[]>(`${this.apiBase}${this.controller}/user/${user}`);
  }
  buscarTestById(id:number){
    return this.http.get<Test>(`${this.apiBase}${this.controller}/id/${id}`);
  }
  desactivarTest(id:number){
    return this.http.get<Test>(`${this.apiBase}${this.controller}/desactivar/${id}`);
  }

  obtenerResultados(id:number){
    return this.http.get<string>(`${this.apiBase}${this.controller}/resultados/${id}`);
  }
  carrerasRelacionadas(id:number){
    return this.http.get<Carrera[]>(`${this.apiBase}${this.controller}/relacionado/${id}`);
  }
  deleteTest(id:number){
    return this.http.delete(`${this.apiBase}${this.controller}/${id}`);
  }
  crearTest(test:Test){
    return this.http.post<Test>(`${this.apiBase}${this.controller}`,test);
  }
  
}
