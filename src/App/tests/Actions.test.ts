// third party libraries
import { configure } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16';
import moxios from 'moxios';

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
import {
  deleteArticle,
  getArticles,
  markAsRead,
  fullTextSearch
} from '../../store/actions/articles';

// fixtures
import { articles } from '../fixtures';

configure({ adapter: new Adapter() });

const store = configureStore([thunk])({
  articles: {
    articles
  }
});

const rootUrl = 'http://localhost:3001';

describe('Tests for actions', () => {
  beforeEach(() => {
    store.clearActions();
    moxios.install()
  });

  afterEach(() => {
    moxios.uninstall();
  })

  it('should get all rticles', async (done) => {
    moxios.stubRequest(`${rootUrl}/articles`, {
      response: {
        data: articles
      },
      status: 200
    });

    await getArticles(store.dispatch)();

    expect(store.getActions()[0].type).toEqual(GET_ARTICLES_SUCCESS);
    done();
  });

  it('should fail to get articles', async (done) => {
    moxios.stubRequest(`${rootUrl}/articles`, {
      response: {
        error: 'there are no articles'
      },
      status: 404
    });

    await getArticles(store.dispatch)();
    expect(store.getActions()[0].type).toEqual(GET_ARTICLES_FAILURE);
    done();
  });

  it('should mark an article as read successfully', async (done) => {
    moxios.stubRequest(`${rootUrl}/articles/1`, {
      response: {
        data: articles[0]
      },
      status: 200
    });

    await markAsRead(store.dispatch, 1);

    expect(store.getActions()[0].type).toEqual(MARK_AS_READ_SUCCESS);
    done();
  });

  it('should fail to mark as read', async (done) => {
    moxios.stubRequest(`${rootUrl}/articles/1`, {
      response: {
        error: 'There is no article with that id'
      },
      status: 404
    });

    await markAsRead(store.dispatch, 1);

    expect(store.getActions()[0].type).toEqual(MARK_AS_READ_FAILURE);
    done();
  });

  it('should delete an article successfully', async (done) => {
    moxios.stubRequest(`${rootUrl}/articles/1`, {
      response: {
        message: 'Article successfully deleted'
      },
      status: 200
    });

    await deleteArticle(store.dispatch, 1);

    expect(store.getActions()[0].type).toEqual(DELETE_ARTICLE_SUCCESS);
    done();
  });

  it('should fail to delete an article', async (done) => {
    moxios.stubRequest(`${rootUrl}/articles/1`, {
      response: {
        message: 'Article with that id does not exist'
      },
      status: 404
    });

    await deleteArticle(store.dispatch, 1);

    expect(store.getActions()[0].type).toEqual(DELETE_ARTICLE_FAILURE);
    done();
  });

  it('should search for articles successfully', async (done) => {
    moxios.stubRequest(`${rootUrl}/articles?q=sample`, {
      response: {
        data: articles
      },
      status: 200
    });

    await fullTextSearch(store.dispatch, 'sample')

    expect(store.getActions()[0].type).toEqual(FULL_TEXT_SEARCH_SUCCESS);
    done();
  });

  it('should fail during full text search', async (done) => {
    moxios.stubRequest(`${rootUrl}/articles?q=sample`, {
      response: {
        message: ' No articles found'
      },
      status: 404
    });

    await fullTextSearch(store.dispatch, 'sample')

    expect(store.getActions()[0].type).toEqual(FULL_TEXT_SEARCH_FAILURE);
    done();
  });
});
