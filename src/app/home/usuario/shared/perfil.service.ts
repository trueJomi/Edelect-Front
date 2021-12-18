import { Usuario } from "src/app/auth/shared/usuario.model";
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { usuario } from "../../layout/login/shared/login.model";

@Injectable( { providedIn: 'root', })
export class usuarioService{
    private apiBase: string= environment.apiBase;
    constructor(private http:HttpClient){}

    getAllUsuario(){
        return this.http.get <Usuario>('${this.apiBase}/usuario');
    }

    get(id:number){
        return this.http.get('${this.apiBase}/usuario/${id}');
    }

    update(Usuario: Usuario){
        return this.http.put('${this.apiBase}/usuario',usuario);
    }

    delete(id: number){
        return this.http.delete('${this.apiBase}/usuario/${id}');
    }
}