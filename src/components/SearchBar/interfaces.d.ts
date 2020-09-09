// interfaces
import { VoidFunction } from "../../App/interfaces";
import { Event } from "../../views/ArticleCardsView/interfaces";

export interface SearchBarProps {
  handleSearch: (event: Event) => void;
}

export interface SearchBoxProps {
  handleSearch: (event: Event) => void;
}