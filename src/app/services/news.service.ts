import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResultType } from '../types/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = "http://localhost:3000/news";

  constructor(private http: HttpClient) {}

  getNews() {
    return this.http.get<ApiResultType>(this.apiUrl)
  }
}
