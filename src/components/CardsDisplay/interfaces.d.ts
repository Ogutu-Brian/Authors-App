// interfaces
import { Articles } from "../../store/actions/articles/interfaces";

export interface ContentCardProps {
  name: string;
  emai: string;
  occupation: string;
  articleTitle: string;
  articleDescription: string;
  isReadArticle: boolean;
}

export interface UserInfoProps {
  name: string;
  email: string;
  occupation: string;
  isReadArticle:boolean;
}

export interface ContentProps {
  articleTitle: string;
  articleDescription: string;
}

export interface ArticleCardProps {
  articleTitle: string;
  articleDescription: string;
}

export interface CardsDisplayProps {
  articles: Articles
}
