import { Component } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { ArticleType } from 'src/app/types/news';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  newsToBigCard: ArticleType | undefined = undefined;
  newsToSmallCard: ArticleType[] = [];

  constructor(private newsService: NewsService){
    this.getArticles();
  }

  getArticles(): void {
    this.newsService.getNews().subscribe(result => {
      this.newsToBigCard = result.articles.shift();
      this.newsToSmallCard = result.articles;
    });
  }

}
