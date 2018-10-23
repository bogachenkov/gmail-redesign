import React, { Component } from 'react';
import ReactSVG from 'react-svg';

import './search.css';

import searchIcon from './svg/twotone-search-24px.svg';
import caretDown from './svg/twotone-arrow_drop_down-24px.svg';

class Search extends Component {

  state = {
    search: ''
  }

  changeHandler = (e) => {
    this.setState({search: e.target.value});
  }

  submitHandler = (e) => {

  }

  render() {
    return (
      <form className="search">
        <span className="search--icon">
          <ReactSVG className="icon-twotone" src={searchIcon} />
        </span>
        <input
          type="text"
          placeholder="Поиск в почте"
          value={this.state.search}
          onChange={this.changeHandler} />
        <span className="search--drop_down">
          <ReactSVG className="icon-twotone" src={caretDown} />
        </span>
      </form>
    );
  }
}

export default Search;
