import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Article } from 'src/app/models/Article.model';
import { User } from 'src/app/models/User.model';
import { ArticleService } from 'src/app/services/api/article.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  articles: Article[] = [];
  newPost: Article = {};
  user: User|null = {};
  editMode: string = 'Create new post';

  constructor(
    private articleService: ArticleService,
    private notifications: ToastrService,
    private userStoreService: UserStoreService
  ) {}

  ngOnInit(): void {
    this.getAllArticles();

    this.userStoreService.user.subscribe((user) => {
      if (user != null) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  }

  getAllArticles() {
    this.articleService.getAll().subscribe((success) => {
      this.articles = success;
    });
  }

  createPost() {
    this.newPost.userId = this.user!.user_id;
    this.articleService.create(this.newPost).subscribe((success) => {
      this.getAllArticles();
      this.notifications.success('Post published.');
      this.newPost = {};
    });
  }
  updatePost() {
    this.newPost.id = this.newPost.article_id;
    this.articleService.update(this.newPost).subscribe((success) => {
      this.getAllArticles();
      this.notifications.success('Post published.');
      this.newPost = {};
      this.editMode = 'Creat new post'
    });
  }

  deletePost(id: any) {
    const sure = confirm("Are you sure you want to delete article this article ?")
    if(sure){
      this.articleService.delete(id).subscribe((success) => {
        this.getAllArticles()
        this.notifications.success('Post deleted');
      });
    }
  }

  setUpForEdit(toEdit: any) {
    this.editMode = 'Edit post';
    this.newPost = {...toEdit}
  }

  scroll(info: any) {
    info.parentNode.parentNode.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  closeEdit(){
    this.editMode = "Create new post"
    this.newPost = {}
  }
}
