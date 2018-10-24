import React, { Component } from 'react';

import ConversationsPanel from '../ConversationsPanel/ConversationsPanel';
import ConversationDisplay from '../ConversationDisplay/ConversationDisplay';

class ConversationComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <ConversationsPanel />
        <ConversationDisplay/>
      </React.Fragment>
    );
  }
}

export default ConversationComponent;
