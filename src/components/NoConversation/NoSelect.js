import React from 'react';
import PieChart from './png/Pie_Chart.png';

const NoSelect = () => (
  <div className="no-conversation">
    <p className="no-conversation--title">
      Ни одна беседа не выбрана
    </p>
    <div className="no-conversation--chart">
      <img src={PieChart} alt="" />
    </div>
    <p className="no-conversation--message">
      В настоящее время вы используете 1,7 ГБ из 17 ГБ
    </p>
    <span className="no-conversation--link">Управление</span>
    <div className="no-conversation--last-visit">
      <p>Последняя активность: 5 минут назад</p>
      <span className="no-conversation--link">Подробнее</span>
    </div>
  </div>
);

export default NoSelect;
