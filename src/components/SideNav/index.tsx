// react libraries
import * as React from 'react';

// styles
import './SideNav.scss';

// interfaces
import { JSX } from './interfaces';

// fixtures
import {
  logoIcon, dashBoardIcon, sessionIcon,
  meetingsIcon, filesIcon, conversationsIcon, settingsIcon
} from './fixtures';

const HoverIcon = () => (
  <div className="hover-icon">..
  </div>
);

const SideNav = (): JSX => (
  <div className="side-nav">
    <div className="side-nav__logo">
      <img src={logoIcon} alt="logo" />
    </div>
    <div className="side-nav__icons">
      <div className="icon">
        <HoverIcon />
        <img className="icon__img" src={dashBoardIcon} alt="dashboard" />
      </div>
      <div className="icon">
        <HoverIcon />
        <img className="icon__img" src={sessionIcon} alt="dashboard" />
      </div>
      <div className="icon">
        <HoverIcon />
        <img className="icon__img" src={meetingsIcon} alt="dashboard" />
      </div>
      <div className="icon">
        <HoverIcon />
        <img className="icon__img" src={filesIcon} alt="dashboard" />
      </div>
      <div className="icon">
        <HoverIcon />
        <img className="icon__img" src={conversationsIcon} alt="dashboard" />
      </div>
      <div className="icon">
        <HoverIcon />
        <img className="icon__img" src={settingsIcon} alt="dashboard" />
      </div>
    </div>
  </div>
);

export default SideNav;
