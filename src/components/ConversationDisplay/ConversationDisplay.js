import React, { Component } from 'react';
import {connect} from 'react-redux';
import './conversation.css';

import {
  unselectAll
} from '../../store/actions';

import Dialog from '../Dialog/Dialog';
import NoConversation from '../NoConversation/NoConversation';
import Spinner from '../Spinner/Spinner';

class ConversationDisplay extends Component {

  isEmpty = (obj) => {
    return !obj || Object.keys(obj).length === 0;
  }

  render() {
    const {conversation, selectedConversations, unselectAll, loading} = this.props;
    if (loading) return <div className="conversation"><Spinner /></div>
    return (
      <div className="conversation">
        {
          !this.isEmpty(conversation) &&
          <Dialog conversation={conversation} />
        }
        {
          this.isEmpty(conversation) &&
          <NoConversation
            unselectAll={unselectAll}
            selectedConversations={selectedConversations}
          />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  conversation: state.conversations.openedConversation,
  selectedConversations: state.conversations.selectedConversations,
  loading: state.conversations.loading
});
const mapDispatchToProps = dispatch => ({
  unselectAll: () => dispatch(unselectAll())
});
export default connect(mapStateToProps, mapDispatchToProps)(ConversationDisplay);
