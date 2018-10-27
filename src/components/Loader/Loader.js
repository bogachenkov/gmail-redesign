import React from 'react';
import logo from './png/gmail.png';
import './loader.css';

const Loader = () => (
  <div className="loader">
    <div>
      <div className="loader--logo" style={{backgroundImage: `url("${logo}")`}}></div>
      <div className="loader--message">
        Загрузка Gmail...
      </div>
    </div>
  </div>
);

export default Loader;
