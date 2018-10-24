import React from 'react';
import TwoToneIcon from '../TwoToneIcon/TwoToneIcon';

import './services.css';

import calendarIcon from './png/calendar_2x.png';
import keepIcon from './png/keep_2x.png';
import tasksIcon from './png/tasks2_2x.png';

const Services = () => (
  <div className="services">
    <div className="hover-circle">
      <div
        title="Календарь"
        className="services--item"
        style={{backgroundImage: `url("${calendarIcon}")`}}></div>
    </div>
    <div
      title="Google Keep"
      className="services--item"
      style={{backgroundImage: `url("${keepIcon}")`}}></div>
    <div
      title="Задачи"
      className="services--item"
      style={{backgroundImage: `url("${tasksIcon}")`}}></div>
    <p className="services--delimiter"></p>
    <div className="services--add">
      <TwoToneIcon icon="add" size={16} hoverable />
    </div>
  </div>
);

export default Services;
