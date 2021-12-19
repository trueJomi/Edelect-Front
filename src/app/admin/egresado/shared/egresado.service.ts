import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Egresado} from "./egresado.model";

@Injectable({
  providedIn: 'root'
})
export class EgresadoService {

  private apiBase= environment.apiBase

  constructor(private http:HttpClient) { }

  getAllEgresados(){
    return this.http.get<Egresado[]>(this.apiBase+'/egresados')
  }

  getEgresadoById(id: number) {
    return this.http.get(this.apiBase+'/egresados/'+id)
  }
  createEgresado(egresado: Egresado, idSede: number, idCarrera:number) {
    return this.http.post(this.apiBase + '/egresados/'+idSede+'/'+idCarrera, egresado)
  }
  updateEgresado(egresado: Egresado, idSede: number, idCarrera:number) {
    return this.http.put(this.apiBase + '/egresados/'+idSede+'/'+idCarrera, egresado)
  }
  deleteEgresado(id: number) {
    return this.http.delete(this.apiBase + '/egresados/'+ id)
  }
}
