// interfaces
import { VoidFunction } from "../../App/interfaces";

export interface CardProps {
  label: string;
  count: number;
  isNumberCard: boolean;
  isActive: boolean;
  cardName:string;
  markAllAsRead: () => VoidFunction;
}

export interface ArticlesCardsProps {
  totalCount: number;
  unreadCount: number;
  numCardsActive:boolean;
  unreadArticlesCardActive:boolean;
  markAllAsRead:()=>VoidFunction;
}
