// react libraries
import * as React from 'react';

// components
import ArticleCards from '../../components/AticleCards'

// interfaces
import { ArticleCardsViewProps, Event, ArticleCardsViewState } from './interfaces';

class ArticleCardsView extends React.Component<ArticleCardsViewProps, ArticleCardsViewState>{
  state = {
    showNumArticlesDropDown: false,
    showUnreadArticlesDropDown: false,
  }

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick, false);
  }

  componentWillMount() {
    window.removeEventListener('click', this.handleWindowClick, false);
  }

  /**
   * @description handles window click for controlling the mar as read event
   * 
   * @param {Event}
   * 
   * @returns {void}
   */
  handleWindowClick = (event: Event): void => {
    const { classList } = event.target;

    if (classList.contains('num-articles-card')) {
      this.setState({
        showNumArticlesDropDown: true,
        showUnreadArticlesDropDown: false
      });
    } else if (classList.contains('unread-articles-card')) {
      this.setState({
        showNumArticlesDropDown: false,
        showUnreadArticlesDropDown: true,
      });
    } else {
      this.setState({
        showNumArticlesDropDown: false,
        showUnreadArticlesDropDown: false,
      });
    }
  }

  render() {
    const { articles } = this.props;
    const totalCount = articles.length;
    const unreadCount = articles.filter(article => !article.isRead).length;
    const { showUnreadArticlesDropDown, showNumArticlesDropDown } = this.state;

    return (
      <ArticleCards
        totalCount={totalCount}
        unreadCount={unreadCount}
        unreadArticlesCardActive={showUnreadArticlesDropDown}
        numCardsActive={showNumArticlesDropDown}
        markAllAsRead={this.props.markAllAsRead}
      />
    );
  }
}

export default ArticleCardsView;
