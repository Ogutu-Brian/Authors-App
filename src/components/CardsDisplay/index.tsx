import * as React from 'react';

// styles
import './CardsDisplay.scss';

// interfaces
import { JSX } from '../../components/SideNav/interfaces';
import { ContentCardProps, UserInfoProps, ArticleCardProps, CardsDisplayProps } from './interfaces';

// fixtures
import { userIconUrl } from './fixtures';

const UserIcon = (): JSX => (
  <div className="icon">
    <img src={userIconUrl} alt="author" />
  </div>
);

const UserInformation = (props: UserInfoProps): JSX => (
  <div className="general-info">
    <UserIcon />
    <div className="general-info__user-info">
      <p className="general-info__user-info__name">{props.name}</p>
      <p className="general-info__user-info__mail">{props.email}</p>
      <p className="general-info__user-info__occupation">{props.occupation}</p>
    </div>
    {!props.isReadArticle && <span className="unread-icon">.</span>}
  </div>
);

const ArticleCard = (props: ArticleCardProps) => (
  <div className="article-card">
    <p className="article-card__title">{props.articleTitle}</p>
    <p className="article-card__description">{props.articleDescription}</p>
  </div>
);

const ContentCard = (props: ContentCardProps): JSX => (
  <div className="content-card">
    <UserInformation
      name={props.name}
      email={props.emai}
      occupation={props.occupation}
      isReadArticle={props.isReadArticle}
    />
    <ArticleCard
      articleTitle={props.articleTitle}
      articleDescription={props.articleDescription}
    />
  </div>
);

const CardsDisplay = (props: CardsDisplayProps): JSX => {
  const content = props.articles ? props.articles.map(article => (
    <ContentCard
      key={article.id}
      name={article.author}
      emai={article.email}
      occupation={article.jobTitle}
      articleTitle={article.title}
      articleDescription={article.desc}
      isReadArticle={article.isRead}
    />
  )) : 'No articles available';

  return (
      <div className="card-container">
          <div className="cards-display">
              {content}
          </div>
      </div>
  );
};

export default CardsDisplay;
