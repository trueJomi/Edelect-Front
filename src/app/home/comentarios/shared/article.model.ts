import { Universidad } from "./universidad.model";
import { User } from "./user.model";


export class Article {
    
    idComentario: number;
    contenido: string;
    user: User;
    universidad:Universidad;
    votes: number;

    title: string;
    link: string;


    constructor(title: string, link: string, votes?: number){
        this.title=title;
        this.link=link;
        this.votes=votes||0;

    }
voteUp():void {
this.votes +=1;

}
voteDown():void {
    this.votes -=1;
   
    }
    
} 