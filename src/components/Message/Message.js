import React, { Component } from 'react';

import './message.css';

import MessageBar from './MessageBar';
import MessageAvatar from './MessageAvatar';
import MessageBody from './MessageBody';
import MessageFooter from './MessageFooter';

class Message extends Component {
  render() {
    const {message, isMessageSelect, onSelectMsg, toggleReply, replyIsOpen} = this.props;
    const {from} = message;

    return (
      <article className="message">
        <div className="message--content">
          <MessageAvatar user={from} />
          <MessageBody
            onSelectMsg={onSelectMsg}
            message={message}
            isMessageSelect={isMessageSelect} />
          <MessageBar
            date={`${message.date}, ${message.time}`}
            isMessageSelect={isMessageSelect} />
        </div>
        {
          isMessageSelect && !replyIsOpen &&
          <MessageFooter toggleReply={toggleReply} />
        }
      </article>
    );
  }
}

export default Message;
