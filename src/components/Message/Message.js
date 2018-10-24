import React, { Component } from 'react';
import {connect} from 'react-redux';

import './message.css';

import MessageBar from './MessageBar';
import MessageAvatar from './MessageAvatar';
import MessageBody from './MessageBody';
import MessageFooter from './MessageFooter';

class Message extends Component {
  render() {
    const {message, users, isOpen, onSelectMsg, destUserId} = this.props;
    const user = users.find(user => user.id === message.user);
    return (
      <article className="message">
        <div className="message--content">
          <MessageAvatar user={user} />
          <MessageBody
            destUserId={destUserId}
            onSelectMsg={onSelectMsg}
            users={users}
            user={user}
            message={message}
            isOpen={isOpen} />
          <MessageBar
            date={`${message.date}, ${message.time}`}
            isOpen={isOpen} />
        </div>
        {
          isOpen &&
          <MessageFooter />
        }
      </article>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users
});
export default connect(mapStateToProps)(Message);
