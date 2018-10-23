import React, { Component } from 'react';

import './conversation.css';

import NoConversation from './NoConversation/NoConversation';

class ConversationDisplay extends Component {
  render() {
    const {selectedId} = this.props;
    return (
      <div className="conversation">
        {selectedId && <h1>Yep!</h1>}
        {!selectedId && <NoConversation />}
      </div>
    );
  }
}

export default ConversationDisplay;
