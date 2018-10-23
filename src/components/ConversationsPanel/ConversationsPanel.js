import React, { Component } from 'react';

import ConversationsBar from './ConversationsBar';
import ConversationsList from './ConversationsList';

class ConversationsPanel extends Component {
  render() {
    return (
      <div>
        <ConversationsBar />
        <ConversationsList />
      </div>
    );
  }
}

export default ConversationsPanel;
