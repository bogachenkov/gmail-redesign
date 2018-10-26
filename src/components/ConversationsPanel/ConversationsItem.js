import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TwoToneIcon from '../TwoToneIcon/TwoToneIcon';

import ConversationActions from './ConversationActions';
import SimpleAvatar from './SimpleAvatar';
import SelectedAvatar from './SelectedAvatar';

class ConversationsItem extends Component {

  openConversationHandler = e => {
    const {openConversation, isActive} = this.props;
    if (!isActive) openConversation();
  }

  render() {
    const {
      conversation,
      isActive,
      isSelected,
      selectConversation,
      unselectConversation
    } = this.props;
    const {user} = conversation;

    let className = "conversations--item";
    if (!conversation.isReaded) className += " new";
    if (isActive) className += " active";
    if (isSelected) className += " selected";

    return (
      <div className={className}>
        {isSelected ?
          <SelectedAvatar onClick={unselectConversation} />
          :
          <SimpleAvatar user={user} onClick={selectConversation} />}
        <div className="conversations--data" onClick={this.openConversationHandler}>
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
          !isActive && <ConversationActions />
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
}

export default ConversationsItem;
