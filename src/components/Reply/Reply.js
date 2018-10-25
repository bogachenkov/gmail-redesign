import React, { Component } from 'react';
import TwoToneIcon from '../TwoToneIcon/TwoToneIcon';

import actions from './png/Screen_Shot_2018-05-15_at_10.29.08_PM.png';

import './reply.css';

class Reply extends Component {

  state = {
    text: ''
  }

  changeTextHandler = e => {
    e.target.style.height = "1px";
    e.target.style.height = (e.target.scrollHeight)+"px";
    this.setState({
      text: e.target.value
    });
  }

  render() {
    return (
      <article className="reply">
        <header className="reply--header">
          <TwoToneIcon icon="reply" size={16} />
          <p className="reply--user">Ivan Ivanov</p>
        </header>
        <div className="reply--body">
          <textarea
            autoFocus
            value={this.state.text}
            onChange={this.changeTextHandler}
            className="reply--textarea"></textarea>
          <div className="reply--history">
            <TwoToneIcon icon="more_horiz" size={30} />
          </div>
          <div className="reply--capture">
            <p className="reply--author">John Doe</p>
            <p className="reply--author-sub">Frontend-разработчик</p>
          </div>
        </div>
        <footer className="reply--footer">
          <button className="reply--button">Отправить</button>
          <div className="reply--actions">
            <img src={actions} alt="" />
          </div>
          <div className="reply--draft-actions">
            <TwoToneIcon size={16} hoverable icon="delete" />
            <TwoToneIcon size={16} hoverable icon="more_vert" />
          </div>
        </footer>
      </article>
    );
  }
}

export default Reply;
