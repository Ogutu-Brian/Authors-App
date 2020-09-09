// react libraries
import * as React from 'react';

// styles
import './SearchBar.scss';

// interfaces
import { JSX } from '../../components/SideNav/interfaces';
import { SearchBarProps, SearchBoxProps } from './interfaces';

// fixtures
import { userIcon, searchIcon } from './fixtures';

const SearchBox = (props: SearchBoxProps): JSX => (
  <div className="search-box">
    <img className="search-box__icon" src={searchIcon} alt="search" />
    <input type="text"
      className="search-box__input"
      placeholder="Find a user, team, meeting..."
      onChange={props.handleSearch}
    />
  </div>
);

const UserIcon = (): JSX => (
  < img className="user-icon" src={userIcon} alt="user" />
);

const SearchBar = (props: SearchBarProps) => (
  <div className="search-bar">
    <SearchBox
      handleSearch={props.handleSearch}
    />
    <UserIcon />
  </div>
);

export default SearchBar;
