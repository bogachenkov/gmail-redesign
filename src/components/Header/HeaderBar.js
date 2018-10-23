import React from 'react';
import ReactSVG from 'react-svg';

import notificationIcon from './svg/twotone-notifications-24px.svg';
import appsIcon from './svg/twotone-apps-24px.svg';

const HeaderBar = () => (
  <div className="header--bar">
    <div className="header--apps" title="Приложения Google">
      <ReactSVG className="icon-twotone" src={appsIcon} title="Приложения Google" />
    </div>
    <ReactSVG className="header--notification icon-twotone" src={notificationIcon} title="Уведомления" />
    <div className="header--user" title="Аккаунт Google"></div>
  </div>
);

export default HeaderBar;
