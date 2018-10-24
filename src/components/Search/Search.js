import React, { Component } from 'react';
import TwoToneIcon from '../TwoToneIcon/TwoToneIcon';

import './search.css';

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
          <TwoToneIcon icon="search" size={18} />
        </span>
        <input
          type="text"
          placeholder="Поиск в почте"
          value={this.state.search}
          onChange={this.changeHandler} />
        <span className="search--drop_down">
          <TwoToneIcon icon="arrow_drop_down" size={18} />
        </span>
      </form>
    );
  }
}

export default Search;
