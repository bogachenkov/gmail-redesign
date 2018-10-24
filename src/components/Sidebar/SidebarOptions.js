import React from 'react';
import TwoToneIcon from '../TwoToneIcon/TwoToneIcon';

const SidebarOptions = () => (
  <div className="sidebar--options">
    <div className="folders--item">
      <TwoToneIcon icon="settings" size={18} />
      Настройки
    </div>
    <div className="folders--item">
      <TwoToneIcon icon="help" size={18} />
      Помощь и отзывы
    </div>
  </div>
);

export default SidebarOptions;
