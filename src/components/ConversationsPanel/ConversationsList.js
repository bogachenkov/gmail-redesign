import React, { Component } from 'react';

import conversationsData from '../../data/conversations';
import usersData from '../../data/users';

import ConversationsItem from './ConversationsItem';

class ConversationsList extends Component {
  render() {
    return (
      <div>
        {
          conversationsData.map((conversation) => (
            <ConversationsItem
              user={usersData.find(el => el.id === conversation.userId)}
              conversation={conversation}
              key={conversation.id} />
          ))
        }
      </div>
    );
  }
}

export default ConversationsList;
