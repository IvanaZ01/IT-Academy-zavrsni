import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Article } from 'src/app/models/Article.model';
import { ArticleService } from 'src/app/services/api/article.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  articles: any = []

  constructor(private articleService: ArticleService, private notifications: ToastrService) { }

  ngOnInit(): void {
    this.articleService.getAll().subscribe(
      (success) => {
        this.articles = success
      }
    )
  }

}
