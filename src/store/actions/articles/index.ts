// interfaces
import {
  Articles,
  GetArticlesSuccess,
  Failure,
  DeleteArticleSuccess,
  Article,
  MarkAsReadSuccess
} from './interfaces';

// types
import {
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAILURE,
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_FAILURE,
  MARK_AS_READ_SUCCESS,
  MARK_AS_READ_FAILURE,
  FULL_TEXT_SEARCH_SUCCESS,
  FULL_TEXT_SEARCH_FAILURE
} from './types';

// utils
import { http } from '../../../utils';

const getArticlesSuccess = (articles: Articles): GetArticlesSuccess => ({
  type: GET_ARTICLES_SUCCESS,
  articles
});

const getArticlesFailure = (error: any): Failure => ({
  type: GET_ARTICLES_FAILURE,
  error
});

const deleteArticlesSucces = (articleId: number): DeleteArticleSuccess => {
  return({
    type: DELETE_ARTICLE_SUCCESS,
    articleId
  })
}

const deleteArticleFailure = (error: any): Failure => ({
  type: DELETE_ARTICLE_FAILURE,
  error
});

const markAsReadSuccess = (response: Article): MarkAsReadSuccess => ({
  type: MARK_AS_READ_SUCCESS,
  data: response
});

const markAsReadFailure = (error: any): Failure => ({
  type: MARK_AS_READ_FAILURE,
  error
});

const fullTextSearchSuccess = (articles: Articles): GetArticlesSuccess => ({
  type: FULL_TEXT_SEARCH_SUCCESS,
  articles
});

const fullTextSearchFailure = (error: any): Failure => ({
  type: FULL_TEXT_SEARCH_FAILURE,
  error
});

export const getArticles = (dispatch: any) => () => http('GET', 'articles')
  .then((response: any) => {
    dispatch(getArticlesSuccess(response.data));
  }).catch((error: any) => {
    dispatch(getArticlesFailure(error));
  });

export const deleteArticle = (dispatch: any, articleId: number) => http('DELETE', `articles/${articleId}`)
  .then((response: any) => {
    dispatch(deleteArticlesSucces(articleId));
  }).catch((error: any) => {
    dispatch(deleteArticleFailure(error));
  });

export const markAsRead = (dispatch: any, articleId: number) => http('PATCH', `articles/${articleId}`, {
  id: articleId,
  isRead: true
}).then((response: any) => {
  dispatch(markAsReadSuccess(response.data));
}).catch((error: any) => {
  dispatch(markAsReadFailure(error));
});

export const fullTextSearch = (dispatch: any, text: string) => http('GET', `articles?q=${text}`)
  .then((response: any) => {
    dispatch(fullTextSearchSuccess(response.data));
  }).catch((error: any) => {
    dispatch(fullTextSearchFailure(error));
  });
