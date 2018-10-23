import React from 'react';
import ReactSVG from 'react-svg';

import settingsIcon from './svg/twotone-settings-24px.svg';
import helpIcon from './svg/twotone-help-24px.svg';

const SidebarOptions = () => (
  <div className="sidebar--options">
    <div className="folders--item">
      <ReactSVG className="icon-twotone" src={settingsIcon} />
      Настройки
    </div>
    <div className="folders--item">
      <ReactSVG className="icon-twotone" src={helpIcon} />
      Помощь и отзывы
    </div>
  </div>
);

export default SidebarOptions;
