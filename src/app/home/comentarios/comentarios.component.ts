import { Component, OnInit } from '@angular/core';
import { Article } from '../article/article.model';

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

  constructor() {

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  sortArticles():Article[]{
return this.articles.sort((a:Article,b:Article) =>b.votes-a.votes);

  }
}
