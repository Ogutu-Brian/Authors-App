// react libraries
import * as React from 'react';

// third party libraries
import { connect } from 'react-redux';

// styles
import './App.scss';

// components
import SideNav from '../components/SideNav';
import SearchBar from '../components/SearchBar';
import HeaderContent from '../components/HeaderContent';
import DayHeader from '../components/DayHeader';
import ArticlesView from '../views/ArticlesView';
import ArticleCardsView from '../views/ArticleCardsView';

// thunks
import { getArticles, deleteArticle, markAsRead, fullTextSearch } from '../store/actions/articles';

// interfaces
import { AppProps, AppState, VoidFunction } from './interfaces';
import { Article } from '../store/actions/articles/interfaces';
import { Event } from '../views/ArticleCardsView/interfaces';

class App extends React.Component<AppProps, AppState> {
  state = {
    displayTable: true,
    articles: [],
  };

  componentDidMount() {
    this.setExistingArticlesToState();
  }

  static getDerivedStateFromProps(props: any, state: AppState) {
    if (props.articles !== state.articles) {
      return {
        ...state,
        articles: props.articles
      }
    }

    return state;
  }

  /**
   * @description sets existing articles to state during mounting
   * 
   * @returns {void}
   */
  setExistingArticlesToState = (): void => {
    this.props.getArticles().then(() => {
      const { articles } = this.props;

      this.setState({
        articles
      });
    });
  }

  /**
   * @description marks an article as read
   * 
   * @param {string} articleId
   *
   * @returns {VoidFunction}
   */
  markAsRead = (articleId: number): VoidFunction => async () => {
    await this.props.markArticleAsRead(articleId);
  }

  /**
   * @description marks all articles as read
   * 
   * @returns {VoidFunction}
   */
  markAllAsRead = (): VoidFunction => async () => {
    const { articles } = this.state;

    await articles.forEach((article: Article) => {
      this.markAsRead(article.id)();
    });
  }

  /**
   * @description Helps in switching between grid view and tabular view
   * 
   * @param {boolean} isTable
   * 
   * @returns {VoidFunction}
   */
  switchView = (isTable: boolean): VoidFunction => (): void => {
    if (isTable) {
      this.setState({
        displayTable: true
      });
    } else {
      this.setState({
        displayTable: false
      });
    }
  }

  /**
   * @description Deletes an article
   *
   * @param {number} articleId
   *
   * @returns {VoidFunction}
   */
  deleteArticle = (articleId: number): VoidFunction => (): void => {
    this.props.deleteArticle(articleId);
  }

  /**
   * @description Handles full text search
   * 
   * @param {Event} event
   *
   * @returns {void}
   */
  fullTextSearch = (event: Event): void => {
    const text = event.target.value;
    this.props.search(text);
  }

  render() {
    const { displayTable, articles } = this.state;

    return (
      <div className="App">
        <SideNav />
        <div className="App__content">
          <SearchBar
            handleSearch={this.fullTextSearch}
          />
          <HeaderContent
            switchView={this.switchView}
            tableActive={displayTable}
          />
          <ArticleCardsView
            articles={articles}
            markAllAsRead={this.markAllAsRead}
          />
          <DayHeader />
          <ArticlesView
            articles={articles}
            displayTable={displayTable}
            deleteArticle={this.deleteArticle}
            markAsRead={this.markAsRead}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  deleteArticle: (articleId: number) => deleteArticle(dispatch, articleId),
  getArticles: () => getArticles(dispatch)(),
  markArticleAsRead: (articleId: number) => markAsRead(dispatch, articleId),
  search: (text: string) => fullTextSearch(dispatch, text),
});

const mapStateToProps = (state: any) => ({
  articles: state.articles.articles
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
