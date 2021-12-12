import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Egresado} from "../../egresado/shared/egresado.model";
import {Carrera} from "./carrera.model";

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  private apiBase= environment.apiBase

  constructor(private http:HttpClient) { }

  getAllCarreras(){
    return this.http.get<Carrera[]>(this.apiBase+'/carrera')
  }

  getCarreraById(id: number) {
    return this.http.get(this.apiBase+'/carrera/'+id)
  }
  createCarrera(carrera: Carrera) {
    return this.http.post(this.apiBase + '/carrera', carrera)
  }
  updateCarrera(carrera: Carrera) {
    return this.http.put(this.apiBase + '/carrera', carrera)
  }
  deleteCarrera(id: number) {
    return this.http.delete(this.apiBase + '/carrera/'+ id)
  }

}
