// interfaces
import { Articles } from "../store/actions/articles/interfaces";

export interface AppProps {
  deleteArticle: (articleId: number) => Function;
  getArticles: Function;
  articles: Articles;
  markArticleAsRead: (articleId: number) => Function;
  search: (text: string) => void;
}

export interface AppState {
  displayTable: boolean;
  articles: Articles;
}

export type VoidFunction = () => void;
