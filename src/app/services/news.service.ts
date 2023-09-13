import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResultType } from '../types/news';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private readonly apiKey = environment.apiKey;
  private apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&pageSize=5&apiKey=${this.apiKey}`;

  constructor(private http: HttpClient) {}

  getNews() {
    return this.http.get<ApiResultType>(this.apiUrl)
  }
}
