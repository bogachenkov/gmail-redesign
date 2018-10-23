import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg';
import {ConversationContext} from '../../contexts/ConversationContext';

import starIcon from './svg/twotone-star-24px.svg';
import archiveIcon from './svg/twotone-archive-24px.svg';
import trashIcon from './svg/twotone-delete-24px.svg';
import draftIcon from './svg/twotone-drafts-24px.svg';
import snoozeIcon from './svg/twotone-query_builder-24px.svg';

class ConversationsItem extends Component {

  render() {
    const {conversation, user} = this.props;

    let className = "conversations--item";
    if (!conversation.isReaded) className += " new";

    return (
      <ConversationContext.Consumer>
        {({selectedId, selectConversation}) => (
          <div
            onClick={() => selectConversation(conversation.id)}
            className={className + (selectedId === conversation.id ? " selected" : "")}
          >
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
            <div className="conversations--actions-float">
              <ReactSVG title="Архивировать" src={archiveIcon} className="icon-twotone" />
              <ReactSVG title="Удалить" src={trashIcon} className="icon-twotone" />
              <ReactSVG title="Отметить как прочитанное" src={draftIcon} className="icon-twotone" />
              <ReactSVG title="Отложить" src={snoozeIcon} className="icon-twotone" />
            </div>
            <div className="conversations--starred">
              <ReactSVG title="Не помечено" src={starIcon} className="icon-twotone" />
            </div>
          </div>
        )}
      </ConversationContext.Consumer>
    );
  }
}

ConversationsItem.propTypes = {
  conversation: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
}

export default ConversationsItem;
