import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Egresado} from "../../egresado/shared/egresado.model";
import {Sede} from "./sede.model";

@Injectable({
  providedIn: 'root'
})
export class SedeService {

  private apiBase= environment.apiBase

  constructor(private http:HttpClient) { }

  getAllSedes(){
    return this.http.get<Sede[]>(this.apiBase+'/sedes')
  }

  getSedeById(id: number) {
    return this.http.get(this.apiBase+'/sedes/'+id)
  }
  createSede(sede: Sede, id:number) {
    return this.http.post(this.apiBase + '/sedes/'+id, sede)
  }
  updateSede(sede: Sede , id:number) {
    return this.http.put(this.apiBase + '/sedes/'+id, sede)
  }
  deleteSede(id: number) {
    return this.http.delete(this.apiBase + '/sedes/'+ id)
  }

}
