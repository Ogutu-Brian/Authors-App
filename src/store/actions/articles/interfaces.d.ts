export interface Article {
  avatar: string;
  author: string;
  email: string;
  isRead: boolean;
  jobTitle: string;
  title: string;
  desc: string;
  tags: string[];
  id: number;
}

export type Articles = Article[];

export interface GetArticlesSuccess {
  type: string;
  articles: Articles;
}

export interface DeleteArticleSuccess {
  type: string;
  articleId: number;
}

export interface Failure {
  type: string;
  error: any;
}

export interface MarkAsReadSuccess {
  type: string;
  data: Article;
}
