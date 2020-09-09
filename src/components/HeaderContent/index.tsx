// react libraries
import * as React from 'react';

// styles
import './HeaderContent.scss';

// interfaces
import { JSX } from '../../components/SideNav/interfaces';
import { TableOptionProps, HeadersProps, } from './interfaces';

// fixtures
import { inactiveCardUrl, activeCardUrl, activeTableUrl, inactiveTableUrl } from './fixtures';

const TableOption = (props: TableOptionProps): JSX => (
  <div className="options">
    <div className={`options__cards ${props.tableActive ? '' : 'white-background'}`}
      onClick={props.switchView(false)}>
      <img
        src={props.tableActive ? inactiveCardUrl : activeCardUrl}
        alt="cards" />
      <span className="options__text"> Cards</span>
    </div>
    <div
      className={`options__table ${props.tableActive ? 'white-background' : ''}`}
      onClick={props.switchView(true)}>
      <img
        src={props.tableActive ? activeTableUrl : inactiveTableUrl}
        alt="table" />
      <span className="options__text"> Table</span>
    </div>
  </div>
);

const Headers = (props: HeadersProps): JSX => (
  <div className="headers">
    <p className="headers__title">Articles</p>
    <TableOption
      tableActive={props.tableActive}
      switchView={props.switchView}
    />
  </div>
);

export default Headers;
