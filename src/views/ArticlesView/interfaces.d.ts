// interfaces
import { Articles } from "../../store/actions/articles/interfaces";
import { VoidFunction } from "../../App/interfaces";

export interface ArticlesViewProps {
  articles: Articles;
  displayTable: boolean;
  deleteArticle: (articleId: number) => VoidFunction;
  markAsRead: (articleId: number) => VoidFunction;
}

export interface ArticlesViewState {
  displayTable: boolean;
}
