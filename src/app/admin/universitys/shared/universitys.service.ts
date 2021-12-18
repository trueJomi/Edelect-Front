import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UniversitysService {

  private apiBase: string= environment.apiBase;

  constructor(private http: HttpClient) { }


}
