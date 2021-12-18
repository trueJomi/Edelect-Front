import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Usuario } from 'src/app/auth/shared/usuario.model';
import { environment } from 'src/environments/environment';

@Injectable( { providedIn: 'root', })
export class usuarioService{
    private apiBase: string= environment.apiBase;
    constructor(private http:HttpClient){}

    create(usuario: Usuario){
        return this.http.post('${this.apiBase}/login',Usuario);
    }
}