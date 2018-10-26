import React, { Component } from 'react';
import './no-conversation.css';

import NoSelect from './NoSelect';
import HasSelect from './HasSelect';

class NoConversation extends Component {
  render() {
    const {selectedConversations, unselectAll} = this.props;
    const selectedCount = selectedConversations.length;

    return (
      selectedCount ?
      <HasSelect
        selectedCount={selectedCount}
        unselectAll={unselectAll} />
      :
      <NoSelect />
    );
  }
}

export default NoConversation;
