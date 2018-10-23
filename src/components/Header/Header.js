import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import logo from './logo_gmail_lockup_default_1x.png';
import './header.css';

import Search from '../Search/Search';
import HeaderBar from './HeaderBar';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/">
          <img src={logo} alt="" title="Почта" />
        </Link>
        <Search />
        <HeaderBar />
      </header>
    );
  }
}

export default Header;
