import { Universidad } from "./universidad.model";
import { Usuario } from "./user.model";


export class Comments {
    
    idComentario?:number;
    contenido: string;
    user: Usuario;
    universidad:Universidad;
    votes: number;
} 