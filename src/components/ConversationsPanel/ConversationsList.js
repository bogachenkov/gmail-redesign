import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';

import {
  loadConversation,
  selectConversation,
  unselectConversation
} from '../../store/actions';

import ConversationsItem from './ConversationsItem';

class ConversationsList extends Component {
  render() {
    const {
      conversations,
      openConversation,
      selectConversation,
      unselectConversation,
      openedConversation,
      selectedConversations
    } = this.props;
    return (
      <Scrollbars
        renderTrackVertical={props => <div {...props} style={{display: 'none'}} className="track-horizontal"/>}
        style={{ height: 'calc(100vh - 64px - 60px)' }}>
        <div>
        {
          conversations.map((conversation) => (
            <ConversationsItem
              isActive={openedConversation && openedConversation.id === conversation.id}
              isSelected={selectedConversations.includes(conversation.id)}
              openConversation={() => openConversation(conversation)}
              selectConversation={() => selectConversation(conversation.id)}
              unselectConversation={() => unselectConversation(conversation.id)}
              conversation={conversation}
              key={conversation.id} />
          ))
        }
      </div>
      </Scrollbars>
    );
  }
}

const mapStateToProps = state => ({
  conversations: state.conversations.conversations,
  openedConversation: state.conversations.openedConversation,
  selectedConversations: state.conversations.selectedConversations
});
const mapDispatchToProps = dispatch => ({
  openConversation: conversation => dispatch(loadConversation(conversation)),
  selectConversation: convId => dispatch(selectConversation(convId)),
  unselectConversation: convId => dispatch(unselectConversation(convId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ConversationsList);
