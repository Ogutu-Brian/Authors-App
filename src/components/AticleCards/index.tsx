// react libraris
import * as React from 'react';

// styles
import './ArticleCards.scss';

// interfaces
import { JSX } from '../SideNav/interfaces';
import { CardProps, ArticlesCardsProps } from './interfaces';

const Card = (props: CardProps): JSX => (
  <div className="card">
    <p className="card__label">{props.label}
      <span className={`elipses elipse ${props.cardName}`}>...</span>
      {props.isActive
        ? <span className="dropdown" onClick={props.markAllAsRead()}>
          Mark All as Read
      </span>
        : ''}
    </p>
    <p className={`card__count ${!props.isNumberCard
      ? 'card__count--unread' : ''}`}>
      {props.count}
      <span className="card__day-label">
        This day
        </span>
    </p>
  </div>
);

const ArticleCards = (props: ArticlesCardsProps): JSX => (
  <div className="cards">
    <Card
      label={'Number of articles'}
      count={props.totalCount}
      isNumberCard={true}
      isActive={props.numCardsActive}
      cardName={'num-articles-card'}
      markAllAsRead={props.markAllAsRead}
    />
    <Card
      label={'Unread articles'}
      count={props.unreadCount}
      isNumberCard={false}
      isActive={props.unreadArticlesCardActive}
      cardName={'unread-articles-card'}
      markAllAsRead={props.markAllAsRead}
    />
  </div>
);

export default ArticleCards;
