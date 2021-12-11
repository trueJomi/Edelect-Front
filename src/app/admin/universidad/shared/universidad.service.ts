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
  getAllUniversidad(){
    return this.http.get<Universidad[]>(`${this.apiBase}/universidad`);
  }
  get(id: number) {
    return this.http.get(`${this.apiBase}/coffes/${id}`);
  }

  create(product: Universidad) {
    return this.http.post(`${this.apiBase}/coffes`, product);
  }

  update(product: Universidad) {
    return this.http.put(`${this.apiBase}/coffes`, product);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiBase}/coffes/${id}`);
  }
}
