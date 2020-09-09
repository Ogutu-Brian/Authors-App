// third party libraries
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// types
import {
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAILURE,
  MARK_AS_READ_SUCCESS,
  MARK_AS_READ_FAILURE,
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_FAILURE,
  FULL_TEXT_SEARCH_SUCCESS,
  FULL_TEXT_SEARCH_FAILURE
} from '../../store/actions/articles/types';

// thunks
import Article from '../../store/reducers/articles';

// fixtures
import { articles } from '../fixtures';

configure({ adapter: new Adapter() });

const initialState = {
  articles: [],
  errors: []
};

describe('Tests for reducers', () => {
  it('should return default if type is invalid', () => {
    const action = {
      type: 'invalid type'
    };
    const result = Article(initialState, action);

    expect(result).toEqual(initialState);
  });

  it('should test for getting all articles', () => {
    const action = {
      type: GET_ARTICLES_SUCCESS,
      articles
    };
    const result = Article(initialState, action);

    expect(result).toEqual({
      ...initialState,
      articles
    });
  });

  it('should test for getting all articles failure', () => {
    const action = {
      type: GET_ARTICLES_FAILURE,
      error: 'No articles found'
    };
    const result = Article(initialState, action);

    expect(result).toEqual({
      ...initialState,
      errors: 'No articles found'
    });
  });

  it('should delete an article successfully', () => {
    const action = {
      type: DELETE_ARTICLE_SUCCESS,
      articleId: 1
    };
    const result = Article(initialState, action);

    expect(result).toEqual(initialState);
  });

  it('should fail to delete an article', () => {
    const action = {
      type: DELETE_ARTICLE_FAILURE,
      error: 'There is no article with that id'
    };
    const result = Article(initialState, action);

    expect(result).toEqual({
      ...initialState,
      errors: 'There is no article with that id'
    });
  });

  it('should mark an article as read successfully', () => {
    const action = {
      type: MARK_AS_READ_SUCCESS,
      data: {
        id: 1
      }
    };
    const result = Article(initialState, action);

    expect(result).toEqual(initialState);
  });

  it('should mark as read failure', () => {
    const action = {
      type: MARK_AS_READ_FAILURE,
      error: 'There is no article with that id'
    };
    const result = Article(initialState, action);

    expect(result).toEqual({
      ...initialState,
      errors: 'There is no article with that id'
    });
  });

  it('should do full text search successfully', () => {
    const action = {
      type: FULL_TEXT_SEARCH_SUCCESS,
      articles
    };
    const result = Article(initialState, action);

    expect(result).toEqual({
      ...initialState,
      articles
    });
  });

  it('should fail to perform a full text search', () => {
    const action = {
      type: FULL_TEXT_SEARCH_FAILURE,
      error: 'internal server error'
    };
    const result = Article(initialState, action);

    expect(result).toEqual({
      ...initialState,
      errors: 'internal server error'
    });
  });
});
