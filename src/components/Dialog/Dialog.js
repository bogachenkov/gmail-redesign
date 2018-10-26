import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import {connect} from 'react-redux';

import './dialog.css';

import DialogBar from './DialogBar';
import Message from '../Message/Message';
import Reply from '../Reply/Reply';
import Label from '../Label/Label';

import {addReply} from '../../store/actions';

class Dialog extends Component {

  state = {
    selectedMsg: null,
    replyIsOpen: false
  }

  componentDidMount() {
    const {conversation} = this.props;
    const selectedMsg = conversation.messages.slice(-1)[0].id;
    this.setState({
      selectedMsg
    }, () => {
      this.scroll.scrollToBottom();
    });
  }

  selectMessage = (id) => {
    this.setState({
      selectedMsg: id
    });
  }

  toggleReply = e => {
    this.setState({
      replyIsOpen: !this.state.replyIsOpen
    }, () => {
      this.scroll.scrollToBottom()
    });
  }

  addReply = reply => {
    const {conversation} = this.props;
    this.props.addReply(reply, conversation.id);
    this.setState({
      replyIsOpen: false,
      selectedMsg: reply.id
    });
  }

  render() {
    const {conversation} = this.props;
    const {selectedMsg, replyIsOpen} = this.state;
    return (
      <section className="dialog">
        <header className="dialog--header">
          <h3 className="dialog--title">{conversation.title}</h3>
          <div className="dialog--labels">
            {
              conversation.folders.map(folder => <Label key={folder.type} folder={folder} />)
            }
          </div>
          <DialogBar />
        </header>
          <Scrollbars
            ref={el => this.scroll = el}
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
            style={{ height: 'calc(100vh - 64px - 60px - 20px)' }}>
            <div className="dialog--body">
            {
              conversation.messages.map((message, i, arr) =>
                <Message
                  toggleReply={this.toggleReply}
                  replyIsOpen={replyIsOpen}
                  message={message}
                  onSelectMsg={() => this.selectMessage(message.id)}
                  isMessageSelect={message.id === selectedMsg}
                  key={message.id} />
              )
            }
            {replyIsOpen && <Reply addReply={this.addReply} to={conversation.user} toggleReply={this.toggleReply} />}
            </div>
          </Scrollbars>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addReply: (reply, conversationID) => dispatch(addReply(reply, conversationID))
});

export default connect(null, mapDispatchToProps)(Dialog);
