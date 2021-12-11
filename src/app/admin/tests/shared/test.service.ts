import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Test} from "./test.model";

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private apiBase:string=environment.apiBase;
  constructor(private http:HttpClient) { }

  getAllTest(){
    return this.http.get<Test[]>('${this.apiBase}/test');
  }
}
