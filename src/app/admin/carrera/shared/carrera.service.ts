import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Carrera} from "./carrera.model";


@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  private apiBase= environment.apiBase

  constructor(private http:HttpClient) { }

  getAllCarreras(){
    return this.http.get<Carrera[]>(this.apiBase+'/carreras')
  }

  getCarreraById(id: number) {
    return this.http.get(this.apiBase+'/carreras/'+id)
  }
  createCarrera(carrera: Carrera) {
    return this.http.post(this.apiBase + '/carreras', carrera)
  }
  updateCarrera(carrera: Carrera) {
    return this.http.put(this.apiBase + '/carreras', carrera)
  }
  deleteCarrera(id: number) {
    return this.http.delete(this.apiBase + '/carreras/'+ id)
  }

}
