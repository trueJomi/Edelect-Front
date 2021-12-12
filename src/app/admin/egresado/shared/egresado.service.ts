import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Sede} from "../../sede/shared/sede.model";
import {Egresado} from "./egresado.model";

@Injectable({
  providedIn: 'root'
})
export class EgresadoService {

  private apiBase= environment.apiBase

  constructor(private http:HttpClient) { }

  getAllEgresados(){
    return this.http.get<Egresado[]>(this.apiBase+'/egresados/all')
  }

  getSedeById(id: number) {
    return this.http.get(this.apiBase+'/egresados/'+id)
  }
  createSede(egresado: Egresado) {
    return this.http.post(this.apiBase + '/egresados', egresado)
  }
  updateSede(egresado: Egresado) {
    return this.http.put(this.apiBase + '/egresados', egresado)
  }
  deleteSede(id: number) {
    return this.http.delete(this.apiBase + '/egresados/'+ id)
  }}
