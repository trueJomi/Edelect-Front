import { Component, Input, OnInit } from '@angular/core';
import {  Comments } from './shared/comments.model';
import { CommentService } from './shared/comentarios.service';
import { Universidad } from "./shared/universidad.model";
import { Usuario } from './shared/user.model';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  articles: Comments[] = [];
  art: Comments;
  
  Universidadid: Observable<number>;
  uni:number;

  constructor(private commentService: CommentService) { 
 
  }
  ngOnInit(): void {
   this.Universidadid=this.commentService.node.asObservable();
   this.Universidadid.subscribe(data => {this.uni=data
    this.getArticlesByUniversity(data);
  
  });
    
  }
  sortArticles():Comments[]{
return this.articles.sort((a:Comments,b:Comments) =>b.votes-a.votes);

  }
  getAllArticles() {
 this.commentService.getAllArticles()
      .subscribe((data: any)=>{
        this.articles=data;
        console.log(data);
      });

      return this.articles.sort((a:Comments,b:Comments) =>b.votes-a.votes);

  }

  getArticlesByUniversity(universidad:number) {
    this.commentService.getByUniversity(universidad)
         .subscribe((data: any)=>{
           this.articles=data;
           console.log(data);
         });
         return false;
         
     }
  createArticle(title: HTMLInputElement) {
   
     this.art =new Comments();
     this.art.contenido=title.value;
     this.art.universidad= new Universidad();
     this.art.universidad.idUniversidad=this.uni;
     this.art.user= new Usuario();
     this.art.user.idUsuario=1;
     this.art.votes=0;
    
    this.commentService.createArticle(this.art).subscribe(data=>{
      console.log(data);
      
      this.getArticlesByUniversity(this.uni);
    
    });
    
    title.value = '';

return false;
}
}
