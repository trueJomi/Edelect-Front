import { Component, OnInit } from '@angular/core';
import { Article } from './shared/article.model';
import { CommentService } from './shared/comentarios.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  articles: Article[] = [];

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0))
    title.value = '';
    link.value = '';
    return false;
  }

  constructor(private commentService: CommentService) { 
 
  }
  ngOnInit(): void {
    
    this.getAllArticles();
  }
  sortArticles():Article[]{
return this.articles.sort((a:Article,b:Article) =>b.votes-a.votes);

  }
  getAllArticles() {
 this.commentService.getAllArticles()
      .subscribe((data: any)=>{
        this.articles=data;
        console.log(data);
      });

      
  }
}
