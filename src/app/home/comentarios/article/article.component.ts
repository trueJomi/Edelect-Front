import { Component, Input, OnInit } from '@angular/core';
import { HostBinding } from '@angular/core';
import { CommentService } from '../shared/comentarios.service';
import { Comments } from '../shared/comments.model';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article !: Comments;
  art: Comments = new Comments();

  constructor(private commentService: CommentService) {

  }


  ngOnInit() {

  }
  deleteArticle() {
    this.commentService.deleteArticle(this.article.idComentario).subscribe(data => {

      console.log(data);
      this.commentService.addNode(this.article.universidad.idUniversidad);
    }
    );

  }
 
  voteUp() {
    this.art.contenido = this.article.contenido;
    this.art.idComentario = this.article.idComentario;
    this.art.universidad = this.article.universidad;
    this.art.user = this.article.user;
    this.art.votes = this.article.votes + 1;
    this.commentService.updateArticle(this.art).subscribe(data => {
      this.commentService.addNode(this.article.universidad.idUniversidad);
      console.log(data);

    }
    );
    return false;
  }
  voteDown() {
    this.art.contenido = this.article.contenido;
    this.art.idComentario = this.article.idComentario;
    this.art.universidad = this.article.universidad;
    this.art.user = this.article.user;
    this.art.votes = this.article.votes - 1;
    this.commentService.updateArticle(this.art).subscribe(data => {
      this.commentService.addNode(this.article.universidad.idUniversidad);
      console.log(data);

    }
    );
    return false;
  }

}

