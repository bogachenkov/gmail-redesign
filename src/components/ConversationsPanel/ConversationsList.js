import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';

import {
  selectConversation
} from '../../store/actions';

import ConversationsItem from './ConversationsItem';

class ConversationsList extends Component {
  render() {
    const {users, conversations, selectConversation, openedConversation} = this.props;
    return (
      <Scrollbars
        renderTrackVertical={props => <div {...props} style={{display: 'none'}} className="track-horizontal"/>}
        style={{ height: 'calc(100vh - 64px - 60px)' }}>
        <div>
        {
          conversations.map((conversation) => (
            <ConversationsItem
              selected={openedConversation && openedConversation.id === conversation.id}
              user={users.find(el => el.id === conversation.userId)}
              onSelect={() => selectConversation(conversation)}
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
  users: state.users.users,
  conversations: state.conversations.conversations,
  openedConversation: state.conversations.openedConversation
});
const mapDispatchToProps = dispatch => ({
  selectConversation: conversation => dispatch(selectConversation(conversation))
});
export default connect(mapStateToProps, mapDispatchToProps)(ConversationsList);
