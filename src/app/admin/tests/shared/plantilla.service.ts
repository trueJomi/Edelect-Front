import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Plantilla} from "./test.model";

@Injectable({
  providedIn: 'root'
})
export class PlantillaService {

  private controller:string='/plantilla'
  private apiBase:string=environment.apiBase;
  constructor(private http:HttpClient) { }

  getAllPLantillas(){
    return this.http.get<Plantilla[]>(`${this.apiBase}${this.controller}`);
  }

  crearPlantilla(plantilla:Plantilla){
    return this.http.post<Plantilla>(`${this.apiBase}${this.controller}`,plantilla)
  }

  eliminarPlantilla(id:number){
    return this.http.delete(`${this.apiBase}${this.controller}/${id}`)
  }

  activarPLantilla(id:number){
    return this.http.get<Plantilla>(`${this.apiBase}${this.controller}/activar/${id}`)
  }

  obtenerPLantillaActual(){
    return this.http.get<Plantilla>(`${this.apiBase}${this.controller}/actual`)
  }

  obtenerPLantillaById(id:number){
    return this.http.get<Plantilla>(`${this.apiBase}${this.controller}/id/${id}`)
  }

  editarPLantilla(plantilla:Plantilla,id:number){
    return this.http.put<Plantilla>(`${this.apiBase}${this.controller}/id/${id}`,plantilla)
  }

}
