// interfaces
import { Articles, Article } from "../../store/actions/articles/interfaces";
import { VoidFunction } from "../../App/interfaces";

export interface AuthorInformationProps {
  name: string;
  email: string;
  occupation: string;
}

export interface ArticleProps {
  title: string;
  description: string;
}

export interface TableDisplayProps {
  articles: Article[];
  deleteArticle: (articleId: number) => VoidFunction;
  markAsRead: (articleId: number) => VoidFunction;
}

export interface DisplayCardProps {
  email: string;
  name: string;
  occupation: string;
  title: string;
  description: string;
  tags: string[];
  deleteArticle: (articleId: number) => VoidFunction;
  articleId: number;
  markAsRead: (articleId: number) => VoidFunction;
  isRead:boolean;
}

export interface TagsProps {
  tags: string[];
}

export interface DeleteButtonProps {
  deleteArticle: (articleId: number) => VoidFunction;
  articleId: number;
}

export interface MarkAsReadProps {
  markAsRead: (articleId: number) => VoidFunction;
  articleId: number;
}
