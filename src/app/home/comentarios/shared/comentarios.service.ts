import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from './article.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CommentService {
    private apiBase: string = environment.apiBase;
  constructor(private http:HttpClient) {}
    
    getAllArticles() {

        return this.http.get<Article[]>(this.apiBase+'/comments');
    }


   
}
function getAllArticles() {
    throw new Error('Function not implemented.');
}

