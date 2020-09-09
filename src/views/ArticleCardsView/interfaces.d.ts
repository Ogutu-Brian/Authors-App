// interfaces
import { Articles } from "../../store/actions/articles/interfaces";
import { VoidFunction } from "../../App/interfaces";

export interface ArticleCardsViewProps {
  articles: Articles;
  markAllAsRead: () => VoidFunction;
}

export interface ArticleCardsViewState {
  showNumArticlesDropDown: boolean;
  showUnreadArticlesDropDown: boolean;
}

export interface Event {
  target: any;
}
