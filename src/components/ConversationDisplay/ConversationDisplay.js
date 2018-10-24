import React, { Component } from 'react';
import {connect} from 'react-redux';
import './conversation.css';

import Dialog from '../Dialog/Dialog';
import NoConversation from '../NoConversation/NoConversation';

class ConversationDisplay extends Component {

  isEmpty = (obj) => {
    return !obj || Object.keys(obj).length === 0;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('dispplay')
  }

  render() {
    const {conversation, loading} = this.props;
    if (loading) return <div className="conversation"></div>
    return (
      <div className="conversation">
        {!this.isEmpty(conversation) && <Dialog conversation={conversation} />}
        {this.isEmpty(conversation) && <NoConversation />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  conversation: state.conversations.openedConversation,
  loading: state.conversations.loading
});
export default connect(mapStateToProps)(ConversationDisplay);
