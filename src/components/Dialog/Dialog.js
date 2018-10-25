import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import './dialog.css';

import DialogBar from './DialogBar';
import Message from '../Message/Message';
import Reply from '../Reply/Reply';

class Dialog extends Component {

  state = {
    selectedMsg: null,
    replyIsOpen: true
  }

  componentDidMount() {
    const selectedMsg = this.props.conversation.messages.slice(-1)[0].id;
    this.setState({
      selectedMsg
    });
  }

  selectMessage = (id) => {
    this.setState({
      selectedMsg: id
    });
  }

  openReply = e => {
    this.setState({
      replyIsOpen: true
    }, () => {
      this.scroll.scrollToBottom()
    });
  }

  render() {
    const {conversation} = this.props;
    const {selectedMsg, replyIsOpen} = this.state;
    return (
      <section className="dialog">
        <header className="dialog--header">
          <h3 className="dialog--title">{conversation.title}</h3>
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
                  openReply={this.openReply}
                  replyIsOpen={replyIsOpen}
                  destUserId={conversation.userId}
                  onSelectMsg={() => this.selectMessage(message.id)}
                  message={message}
                  isOpen={message.id === selectedMsg}
                  key={message.id} />
              )
            }
            {replyIsOpen && <Reply />}
            </div>
          </Scrollbars>
      </section>
    );
  }
}

export default Dialog;
