// react libraries
import * as React from 'react';

// styles
import './TableDisplay.scss';

// interfaces
import { JSX } from '../../components/SideNav/interfaces';
import {
  AuthorInformationProps,
  ArticleProps,
  TableDisplayProps,
  DisplayCardProps,
  TagsProps,
  DeleteButtonProps,
  MarkAsReadProps
} from './interfaces';

// fixtures
import { userIcon } from '../../components/SearchBar/fixtures';
import { deleteBtn } from './/fixtures';

const AuthorIcon = (): JSX => (
  <div className="icon">
    <img src={userIcon} alt="user" />
  </div>
);

const AuthorInformation = (props: AuthorInformationProps): JSX => (
  <div className="author-info">
    <p className="author-info__name">{props.name}</p>
    <p className="author-info__email">{props.email}</p>
    <p className="author-info__occupation">{props.occupation}</p>
  </div>
);

const Article = (props: ArticleProps): JSX => (
  <div className="article">
    <p className="article__title">{props.title}</p>
    <p className="article__description">{props.description}</p>
  </div>
);

const Tags = (props: TagsProps): JSX => (
  <div className="tags">
    {props.tags.map((tag, index) => (
      <button className="tags__tag"
        key={index}>{tag}
      </button>
    ))}
  </div>
);

const DeleteButton = (props: DeleteButtonProps): JSX => (
  <div className="delete-btn">
    <img className="delete-btn__icon"
      src={deleteBtn}
      alt="deleteButton"
      onClick={props.deleteArticle(props.articleId)}
    />
  </div>
);

const MarkReadButn = (props: MarkAsReadProps): JSX => (
  <div className="read-btn">
    <button className="read-btn__btn" onClick={props.markAsRead(props.articleId)}>
      Mark as Read
      </button>
  </div>
);

const UnreadIcon = (): JSX => (
  <div className="unread-icon">
    <span>.</span>
  </div>
);

const DisplayCard = (props: DisplayCardProps): JSX => (
  <div className="display-card">
    <AuthorIcon />
    <AuthorInformation
      email={props.email}
      name={props.name}
      occupation={props.occupation}
    />
    <Article
      title={props.title}
      description={props.description}
    />
    <Tags tags={props.tags} />
    <DeleteButton
      articleId={props.articleId}
      deleteArticle={props.deleteArticle}
    />
    {!props.isRead &&
      <MarkReadButn
        markAsRead={props.markAsRead}
        articleId={props.articleId}
      />}
    {!props.isRead && <UnreadIcon />}
  </div>
);

const TableDisplay = (props: TableDisplayProps): JSX => {
  const { articles } = props;

  const result = articles ? articles.map(article => (
    <DisplayCard
      key={article.id}
      email={article.email}
      name={article.author}
      occupation={article.jobTitle}
      title={article.title}
      description={article.desc}
      tags={article.tags}
      deleteArticle={props.deleteArticle}
      articleId={article.id}
      markAsRead={props.markAsRead}
      isRead={article.isRead}
    />
  )) : 'No Results';

  return (
    <div className="table-container">
      <div className="table-display">
        {result}
      </div>
    </div>
  );
};

export default TableDisplay;
