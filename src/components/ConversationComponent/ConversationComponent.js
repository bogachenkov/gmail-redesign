import React, { Component } from 'react';
import {ConversationContext} from '../../contexts/ConversationContext';

import ConversationsPanel from '../ConversationsPanel/ConversationsPanel';
import ConversationDisplay from '../ConversationDisplay/ConversationDisplay';

class ConversationComponent extends Component {

  state = {
    selectedId: ''
  }

  selectConversation = convId => {
    this.setState({
      selectedId: convId
    });
  }

  render() {
    const {match} = this.props;
    console.log(match.url);
    const {selectedId} = this.state;
    return (
      <ConversationContext.Provider value={{
        selectedId: this.state.selectedId,
        selectConversation: this.selectConversation
      }}>
        <ConversationsPanel />
        <ConversationDisplay selectedId={selectedId} />
      </ConversationContext.Provider>
    );
  }
}

export default ConversationComponent;
