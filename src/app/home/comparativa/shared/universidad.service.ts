import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { Universidad } from './universidad.model';

@Injectable({
  providedIn: 'root'
})
export class UniversidadService {

private controller:string='/universidades'
  private apiBase:string=environment.apiBase;
  constructor(private http:HttpClient) { }

 getAllUniversidad(){
    return this.http.get<Universidad[]>(`${this.apiBase}${this.controller}`);
  }
  
}
