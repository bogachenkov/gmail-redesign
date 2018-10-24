import React from 'react';
import TwoToneIcon from '../TwoToneIcon/TwoToneIcon';

const HeaderBar = () => (
  <div className="header--bar">
    <div className="header--apps" title="Приложения Google">
      <TwoToneIcon icon='apps' hoverable size={20} />
    </div>
    <div className="header--notification">
      <TwoToneIcon icon='notification' size={16} hoverable title="Уведомления" />
    </div>
    <div className="header--user" title="Аккаунт Google"></div>
  </div>
);

export default HeaderBar;
