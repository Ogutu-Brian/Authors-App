// types
import {
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAILURE,
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_FAILURE,
  MARK_AS_READ_FAILURE,
  MARK_AS_READ_SUCCESS,
  FULL_TEXT_SEARCH_SUCCESS,
  FULL_TEXT_SEARCH_FAILURE
} from '../../actions/articles/types';

// interfaces
import { Article } from '../../actions/articles/interfaces';

const initialState = {
  articles: [],
  errors: []
}

const Articles = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.articles
      }
    case GET_ARTICLES_FAILURE:
      return {
        ...state,
        errors: action.error
      }
    case DELETE_ARTICLE_SUCCESS:
      const updDatedArticles = state.articles.filter((article: any) => article.id !== action.articleId);

      return {
        ...state,
        articles: updDatedArticles
      }
    case DELETE_ARTICLE_FAILURE:
      return {
        ...state,
        errors: action.error
      }
    case MARK_AS_READ_SUCCESS:
      const readArticles = state.articles.map((article: Article) => {
        let isRead = article.isRead;

        if (article.id === action.data.id) {
          isRead = true
        }

        return {
          ...article,
          isRead
        }
      });

      return {
        ...state,
        articles: readArticles
      }
    case MARK_AS_READ_FAILURE:
      return {
        ...state,
        errors: action.error
      }
    case FULL_TEXT_SEARCH_SUCCESS:
      return {
        ...state,
        articles: action.articles
      }
    case FULL_TEXT_SEARCH_FAILURE:
      return {
        ...state,
        errors: action.error
      }
    default:
      return state;
  }
}

export default Articles;
