import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './message.css';

import MessageBar from './MessageBar';
import MessageAvatar from './MessageAvatar';
import MessageBody from './MessageBody';
import MessageFooter from './MessageFooter';

class Message extends Component {
  render() {
    const {
      message,
      isMessageSelect,
      onSelectMsg,
      toggleReply,
      replyIsOpen,
      deleteMessage
    } = this.props;
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
            deleteMessage={deleteMessage}
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

Message.propTypes = {
  message: PropTypes.object.isRequired,
  isMessageSelect: PropTypes.bool.isRequired,
  onSelectMsg: PropTypes.func.isRequired,
  toggleReply: PropTypes.func.isRequired,
  replyIsOpen: PropTypes.bool.isRequired,
  deleteMessage: PropTypes.func.isRequired
}

export default Message;
