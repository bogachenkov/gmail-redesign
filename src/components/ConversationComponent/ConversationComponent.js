import React, { Component } from 'react';

import ConversationsPanel from '../ConversationsPanel/ConversationsPanel';
import ConversationDisplay from '../ConversationDisplay/ConversationDisplay';

class ConversationComponent extends Component {

  state = {
    titles: {
      inbox: 'Входящие',
      starred: 'Отмеченные',
      snoozed: 'Отложенные',
      sent: 'Отправленные',
      draft: 'Черновики',
      spam: 'Спам',
      trash: 'Корзина'
    }
  }

  componentDidMount() {
    this.updatePageTitle();
  }

  componentDidUpdate(prevProps, prevState) {
    this.updatePageTitle();
  }

  updatePageTitle = () => {
    const path = this.props.match.path.substr(1);
    if (path) {
      const {titles} = this.state;
      document.title = `${titles[path]} - fake.johndoe@gmail.com - Gmail Redesign`;
      return;
    };
    return;
  }

  render() {
    return (
      <React.Fragment>
        <ConversationsPanel/>
        <ConversationDisplay/>
      </React.Fragment>
    );
  }
}

export default ConversationComponent;
