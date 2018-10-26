import React, { Component } from 'react';
import uniqid from 'uniqid';
import TwoToneIcon from '../TwoToneIcon/TwoToneIcon';

import actions from './png/Screen_Shot_2018-05-15_at_10.29.08_PM.png';

import './reply.css';

class Reply extends Component {

  state = {
    text: ''
  }

  changeTextHandler = e => {
    e.target.style.height = (e.target.scrollHeight)+"px";
    this.setState({
      text: e.target.value
    });
  }

  onSendReply = () => {
    const {addReply, to} = this.props;
    const {text} = this.state;
    const reply = {
      id: uniqid(),
      from: {
        id: 0,
        avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
        name: 'John Doe',
        email: 'fake.johndoe@gmail.com',
        phone: '+7 123 456 7890',
        location: 'Moscow, Russia',
        company: 'Doe Ent.'
      },
      to,
      date: 'окт 25',
      time: '4:00 PM',
      text
    }
    addReply(reply);
  }

  render() {
    const {to, toggleReply} = this.props;
    return (
      <article className="reply">
        <header className="reply--header">
          <TwoToneIcon icon="reply" size={16} />
          <p className="reply--user">{to.name}</p>
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
          <button onClick={this.onSendReply} className="reply--button">Отправить</button>
          <div className="reply--actions">
            <img src={actions} alt="" />
          </div>
          <div className="reply--draft-actions">
            <div onClick={toggleReply}>
              <TwoToneIcon size={16} hoverable icon="delete" />
            </div>
            <div>
              <TwoToneIcon size={16} hoverable icon="more_vert" />
            </div>
          </div>
        </footer>
      </article>
    );
  }
}

export default Reply;
