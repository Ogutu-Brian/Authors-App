// react libraries
import * as React from 'react';

// styles
import './DayHeader.scss';

// interfaces
import { JSX } from '../../components/SideNav/interfaces';

const DayHeader = (): JSX => (
  <div className="day-header">
    <p className="day-header__label">Today</p>
  </div>
);

export default DayHeader;
