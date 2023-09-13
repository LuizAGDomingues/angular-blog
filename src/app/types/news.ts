export interface ArticleType {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export interface ApiResultType {
  status: string;
  totalResults: number;
  articles: ArticleType[];
}