import { Comments } from "./comments.model";
import { Test } from "./tests.model";

export class Usuario{
    
    apellido?:string;
    idUsuario: number;
    userName?: string;
    nombre?: string;
    correo?: string;
    contrasena?: string;
    coment :Comments[]=[];
    tests:Test[]=[];
}