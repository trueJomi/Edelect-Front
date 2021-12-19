import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Comments } from './comments.model';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommentService {
    private apiBase: string = environment.apiBase;
     node:Subject<number> = new Subject<number>();
  constructor(private http:HttpClient) {}
    
    getAllArticles() {

        return this.http.get<Comments[]>(this.apiBase+'/comments');
    }
    getByUniversity(universidad:number) {
      
     
      return this.http.get<Comments[]>(this.apiBase+'/comments/'+universidad);
  }


    createArticle(art:Comments) {
     
     return this.http.post<Comments>(this.apiBase+'/comments',art);
      
  }

deleteArticle(id?:number){
return this.http.delete(this.apiBase+'/comments/'+ id);

}

updateArticle(art:Comments){
return this.http.put<Comments>(this.apiBase+'/comments',art);
}
  addNode(data:number) {
    this.node.next(data);
  }

}