import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TwoToneIcon from '../TwoToneIcon/TwoToneIcon';

import ConversationActions from './ConversationActions';

class ConversationsItem extends Component {

  render() {
    const {conversation, user, onSelect, selected} = this.props;

    let className = "conversations--item";
    if (!conversation.isReaded) className += " new";
    if (selected) className += " selected";

    return (
      <div className={className} onClick={onSelect}>
        <div
          className={user.avatar ? "conversations--avatar" : `conversations--avatar no-avatar ${user.color}`}
          style={{backgroundImage: `url("${user.avatar}")`}}>
            {user.avatar ? "" : user.name[0]}
        </div>
        <div className="conversations--data">
          <p className="conversations--name">
            {user.name}
          </p>
          <p className="conversations--last-message">
            {conversation.messages.slice(-1)[0].text}
          </p>
        </div>
        <div className="conversations--datetime">
          <span>10:27 AM</span>
        </div>
        {
          !selected && <ConversationActions />
        }
        <div className="conversations--starred">
          <TwoToneIcon hoverable title="Не помечено" icon="star" size={16} />
        </div>
      </div>
    );
  }
}

ConversationsItem.propTypes = {
  conversation: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
}

export default ConversationsItem;
