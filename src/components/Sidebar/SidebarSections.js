import React, { Component } from 'react';
import {connect} from 'react-redux';

import SidebarItem from './SidebarItem';

class SidebarSections extends Component {

  state = {
    items: [
      {
        label: 'Входящие',
        icon: 'inbox',
        href: 'inbox'
      },
      {
        label: 'Отмеченные',
        icon: 'star',
        href: 'starred'
      },
      {
        label: 'Отложенные',
        icon: 'access_time',
        href: 'snoozed'
      },
      {
        label: 'Отправленные',
        icon: 'send',
        href: 'sent'
      },
      {
        label: 'Черновики',
        icon: 'insert_drive_file',
        href: 'draft'
      },
      {
        label: 'Спам',
        icon: 'report',
        href: 'spam'
      },
      {
        label: 'Корзина',
        icon: 'delete',
        href: 'trash'
      }
    ]
  }

  render() {
    const {conversations} = this.props;
    const unreadedCounter = conversations.reduce((total, conv) => conv.isReaded === false ? total + 1 : total, 0);
    return (
      <div className="sidebar--sections">
        {
          this.state.items.map(({label, icon, href}) => (
            <SidebarItem
              unreadedCounter={unreadedCounter}
              key={href}
              label={label}
              icon={icon}
              href={href}
            />
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  conversations: state.conversations.conversations
});

export default connect(mapStateToProps)(SidebarSections);
