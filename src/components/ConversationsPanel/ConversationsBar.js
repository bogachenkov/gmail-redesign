import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './conversations.css';
import ConversationActions from './ConversationActions';
import TwoToneIcon from '../TwoToneIcon/TwoToneIcon';

import {
  selectAll,
  unselectAll,
  deleteConversation,
  deleteSelectedConversations,
  showNotification
} from '../../store/actions'

class ConversationsBar extends Component {

  isEmpty = (obj) => {
    return !obj || Object.keys(obj).length === 0;
  }

  deleteConversationHandler = conv_id => {
    const {deleteConversation, showNotification} = this.props;
    deleteConversation(conv_id);
    showNotification('Цепочка помещена в корзину.');
  }

  deleteSelectedConversationsHandler = () => {
    const {deleteSelectedConversations, showNotification, selectedConversations} = this.props;
    const selectedCount = selectedConversations.length;
    deleteSelectedConversations();
    showNotification(`Цепочек помещено в корзину: ${selectedCount}.`);
  }

  render() {
    const {
      openedConversation,
      selectedConversations,
      selectAll,
      unselectAll
    } = this.props;
    return (
      <div className="conversations--bar">
        <div className="conversations--checkAll" onClick={this.checkAllHandler}>
          {
            !selectedConversations.length ?
            <span onClick={selectAll}>
              <TwoToneIcon title="Выбрать" hoverable size={16} icon="check_box_outline_blank"/>
            </span>
            :
            <span onClick={unselectAll}>
              <TwoToneIcon title="Отменить выбор" hoverable size={16} icon="check_box" />
            </span>
          }
        </div>
        <div className="conversations--bar-actions">
          {!this.isEmpty(openedConversation) && <ConversationActions deleteFn={() => this.deleteConversationHandler(openedConversation.id)} /> }
          {!!selectedConversations.length && <ConversationActions deleteFn={this.deleteSelectedConversationsHandler} />}
          <TwoToneIcon hoverable size={16} className="conversations--more" icon="more_vert" />
        </div>
      </div>
    );
  }
}

ConversationsBar.propTypes = {
  openedConversation: PropTypes.object,
  selectedConversations: PropTypes.array.isRequired,
  selectAll: PropTypes.func.isRequired,
  unselectAll: PropTypes.func.isRequired,
  deleteConversation: PropTypes.func.isRequired,
  deleteSelectedConversations: PropTypes.func.isRequired,
  showNotification: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  openedConversation: state.conversations.openedConversation,
  selectedConversations: state.conversations.selectedConversations
});
const mapDispatchToProps = dispatch => ({
  selectAll: () => dispatch(selectAll()),
  unselectAll: () => dispatch(unselectAll()),
  deleteConversation: (conv_id) => dispatch(deleteConversation(conv_id)),
  deleteSelectedConversations: () => dispatch(deleteSelectedConversations()),
  showNotification: (message) => dispatch(showNotification(message))
});
export default connect(mapStateToProps, mapDispatchToProps)(ConversationsBar);
