import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import {CSSTransitionGroup} from 'react-transition-group';

import {
  loadConversation,
  selectConversation,
  unselectConversation,
  deleteConversation,
  showNotification
} from '../../store/actions';

import ConversationsItem from './ConversationsItem';

class ConversationsList extends Component {

  deleteConversationHandler = conv_id => {
    const {deleteConversation, showNotification} = this.props;
    deleteConversation(conv_id);
    showNotification('Цепочка помещена в корзину');
  }

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
      <div>
        {
          conversations.length < 1 ?
          <p className="conversations--not-found">У вас нет ни одной беседы</p>
          :
          <Scrollbars
            renderTrackVertical={props => <div {...props} style={{display: 'none'}} className="track-horizontal"/>}
            style={{ height: 'calc(100vh - 64px - 60px)' }}>
            <div>
              <CSSTransitionGroup
                transitionName="conversations--animation"
                transitionEnter={false}
                transitionLeaveTimeout={300}>
                {
                  conversations.map((conversation) => (
                    <ConversationsItem
                      isActive={!!openedConversation && openedConversation.id === conversation.id}
                      isSelected={selectedConversations.includes(conversation.id)}
                      selectMode={selectedConversations.length > 0}
                      openConversation={() => openConversation(conversation)}
                      selectConversation={() => selectConversation(conversation.id)}
                      unselectConversation={() => unselectConversation(conversation.id)}
                      deleteConversation={() => this.deleteConversationHandler(conversation.id)}
                      conversation={conversation}
                      key={conversation.id} />
                  ))
                }
              </CSSTransitionGroup>
            </div>
          </Scrollbars>
        }
      </div>
    );
  }
}

ConversationsList.propTypes = {
  conversations: PropTypes.array.isRequired,
  openConversation: PropTypes.func.isRequired,
  selectConversation: PropTypes.func.isRequired,
  unselectConversation: PropTypes.func.isRequired,
  deleteConversation: PropTypes.func.isRequired,
  openedConversation: PropTypes.object,
  selectedConversations: PropTypes.array.isRequired,
  showNotification: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  conversations: state.conversations.conversations,
  openedConversation: state.conversations.openedConversation,
  selectedConversations: state.conversations.selectedConversations
});
const mapDispatchToProps = dispatch => ({
  openConversation: conversation => dispatch(loadConversation(conversation)),
  selectConversation: conv_id => dispatch(selectConversation(conv_id)),
  unselectConversation: conv_id => dispatch(unselectConversation(conv_id)),
  deleteConversation: conv_id => dispatch(deleteConversation(conv_id)),
  showNotification: message => dispatch(showNotification(message))
});
export default connect(mapStateToProps, mapDispatchToProps)(ConversationsList);
