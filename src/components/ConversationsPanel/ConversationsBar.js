import React, { Component } from 'react';
import {connect} from 'react-redux';
import './conversations.css';
import ConversationActions from './ConversationActions';
import TwoToneIcon from '../TwoToneIcon/TwoToneIcon';

class ConversationsBar extends Component {

  state = {
    checkAll: false
  }

  checkAllHandler = () => {
    this.setState({
      checkAll: !this.state.checkAll
    });
  }

  isEmpty = (obj) => {
    return !obj || Object.keys(obj).length === 0;
  }

  render() {
    const {openedConversation} = this.props;
    console.log(openedConversation);
    const {checkAll} = this.state;
    return (
      <div className="conversations--bar">
        <div className="conversations--checkAll" onClick={this.checkAllHandler}>
          {
            checkAll ?
            <TwoToneIcon title="Отменить выбор" hoverable size={16} icon="check_box" /> :
            <TwoToneIcon title="Выбрать" hoverable size={16} icon="check_box_outline_blank"/>
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
  openedConversation: state.conversations.openedConversation
});

export default connect(mapStateToProps)(ConversationsBar);
