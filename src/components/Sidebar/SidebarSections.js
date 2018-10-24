import React, { Component } from 'react';

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
    return (
      <div className="sidebar--sections">
        {
          this.state.items.map(({label, icon, href}) => (
            <SidebarItem
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

export default SidebarSections;
