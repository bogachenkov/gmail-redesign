import React, { Component } from 'react';

import inboxIcon from './svg/twotone-inbox-24px.svg';
import starredIcon from './svg/twotone-star-24px.svg';
import snoozedIcon from './svg/twotone-access_time-24px.svg';
import sentIcon from './svg/twotone-send-24px.svg';
import draftIcon from './svg/twotone-insert_drive_file-24px.svg';
import spamIcon from './svg/twotone-report-24px.svg';
import trashIcon from './svg/twotone-delete-24px.svg';

import SidebarItem from './SidebarItem';

class SidebarSections extends Component {

  state = {
    items: [
      {
        label: 'Входящие',
        icon: inboxIcon,
        href: 'inbox'
      },
      {
        label: 'Отмеченные',
        icon: starredIcon,
        href: 'starred'
      },
      {
        label: 'Отложенные',
        icon: snoozedIcon,
        href: 'snoozed'
      },
      {
        label: 'Отправленные',
        icon: sentIcon,
        href: 'sent'
      },
      {
        label: 'Черновики',
        icon: draftIcon,
        href: 'draft'
      },
      {
        label: 'Спам',
        icon: spamIcon,
        href: 'spam'
      },
      {
        label: 'Корзина',
        icon: trashIcon,
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
