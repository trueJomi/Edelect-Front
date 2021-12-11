import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { Universidad } from './universidad.model';

@Injectable({
  providedIn: 'root'
})
export class UniversidadService {

  private apiBase:string =environment.apiBase;
  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get<Universidad[]>(`${this.apiBase}/universidad`);
  }
}
