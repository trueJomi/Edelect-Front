import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Universidad} from "./universidad.model";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UniversidadService {

  constructor(private http:HttpClient) { }
  getAllUniversidades(){
    return this.http.get<Universidad[]>(this.apiBase+'/universidades')
  }
  getUniversidadById(id: number) {
    return this.http.get(this.apiBase+'/universidades/'+id)
  }
  createUniversidad(universidad: Universidad) {
    return this.http.post(this.apiBase + '/universidades', universidad)
  }
  updateUniversidad(universidad: Universidad) {
    return this.http.put(this.apiBase + '/universidades', universidad)
  }
  deleteUniversidad(id: number) {
    return this.http.delete(this.apiBase + '/universidades/'+ id)
  }
}
