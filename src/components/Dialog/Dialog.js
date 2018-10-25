import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import './dialog.css';

import DialogBar from './DialogBar';
import Message from '../Message/Message';

class Dialog extends Component {

  state = {
    selectedMsg: null
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

  render() {
    const {conversation} = this.props;
    const {selectedMsg} = this.state;
    return (
      <section className="dialog">
        <header className="dialog--header">
          <h3 className="dialog--title">{conversation.title}</h3>
          <DialogBar />
        </header>

          <Scrollbars
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
            style={{ height: 'calc(100vh - 64px - 60px - 20px)' }}>
            <div className="dialog--body">
            {
              conversation.messages.map((message, i, arr) =>
                <Message
                  destUserId={conversation.userId}
                  onSelectMsg={() => this.selectMessage(message.id)}
                  message={message}
                  isOpen={message.id === selectedMsg}
                  key={message.id} />
              )
            }
            </div>
          </Scrollbars>

      </section>
    );
  }
}

export default Dialog;
