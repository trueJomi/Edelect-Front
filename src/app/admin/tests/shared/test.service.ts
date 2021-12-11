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
  crearTestBase(test:Test){
    return this.http.post<Test>(`${this.apiBase}${this.controller}/base`,test);
  }
  BuscarTestByUser(user:string){
    return this.http.get<Test[]>(`${this.apiBase}${this.controller}/user/${user}`);
  }
  editTestBase(test:Test){
    return this.http.put<Test>(`${this.apiBase}${this.controller}/base`,test);
  }
  BuscarTestById(id:number){
    return this.http.get<Test>(`${this.apiBase}${this.controller}/id/${id}`);
  }
  ObtenerResultados(id:number){
    return this.http.get<string>(`${this.apiBase}${this.controller}/resultados/${id}`);
  }
  CarrerasRelacionadas(id:number){
    return this.http.get<Carrera[]>(`${this.apiBase}${this.controller}/relacionado/${id}`);
  }
}
