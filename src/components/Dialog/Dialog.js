import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import {connect} from 'react-redux';

import './dialog.css';

import DialogBar from './DialogBar';
import Message from '../Message/Message';
import Reply from '../Reply/Reply';
import Label from '../Label/Label';

import {
  addReply,
  deleteMessage,
  showNotification
} from '../../store/actions';

class Dialog extends Component {

  state = {
    selectedMsg: null,
    replyIsOpen: false
  }

  componentDidMount() {
    this.selectLastMessage();
  }

  selectMessage = (id) => {
    if (this.state.selectedMsg === id) return;
    this.setState({
      selectedMsg: id
    });
  }

  deleteMessage = (conv_id, message_id) => {
    const { deleteMessage, showNotification } = this.props;
    deleteMessage(conv_id, message_id);
    showNotification('Сообщение удалено из цепочки.');
    this.selectLastMessage();
  }

  selectLastMessage = () => {
    const {conversation} = this.props;
    if (conversation.messages.length < 1) {
      return this.setState({
        selectedMsg: null
      });
    };
    const lastMsg = conversation.messages.slice(-1)[0].id;
    this.setState({
      selectedMsg: lastMsg
    }, () => this.scroll.scrollToBottom());
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
    if (conversation.messages.length < 1) return <p className="dialog--no-messages">Здесь будет выводиться история переписки.</p>
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
                    deleteMessage={() => this.deleteMessage(conversation.id, message.id)}
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

Dialog.propTypes = {
  conversation: PropTypes.shape({
    title: PropTypes.string.isRequired,
    folders: PropTypes.array.isRequired,
    messages: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
  }),
  addReply: PropTypes.func.isRequired,
  deleteMessage: PropTypes.func.isRequired,
  showNotification: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  addReply: (reply, conversationID) => dispatch(addReply(reply, conversationID)),
  deleteMessage: (conv_id, message_id) => dispatch(deleteMessage(conv_id, message_id)),
  showNotification: message => dispatch(showNotification(message))
});

export default connect(null, mapDispatchToProps)(Dialog);
