import React, { Component } from 'react';
import {connect} from 'react-redux';
import './conversations.css';
import ConversationActions from './ConversationActions';
import TwoToneIcon from '../TwoToneIcon/TwoToneIcon';

import {
  selectAll,
  unselectAll
} from '../../store/actions'

class ConversationsBar extends Component {

  isEmpty = (obj) => {
    return !obj || Object.keys(obj).length === 0;
  }

  render() {
    const {openedConversation, selectedConversations, selectAll, unselectAll} = this.props;
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
          {!this.isEmpty(openedConversation) && <ConversationActions /> }
          <TwoToneIcon hoverable size={16} className="conversations--more" icon="more_vert" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  openedConversation: state.conversations.openedConversation,
  selectedConversations: state.conversations.selectedConversations
});
const mapDispatchToProps = dispatch => ({
  selectAll: () => dispatch(selectAll()),
  unselectAll: () => dispatch(unselectAll())
});
export default connect(mapStateToProps, mapDispatchToProps)(ConversationsBar);
