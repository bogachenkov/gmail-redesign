import React from 'react';
import ContactInfo from '../ContactInfo/ContactInfo';

const MessageAvatar = ({user}) => (
  <div
    className={user.avatar ? "message--avatar" : `message--avatar no-avatar ${user.color}`}
    style={{backgroundImage: `url("${user.avatar}")`}}>
      {user.avatar ? "" : user.name[0]}
      <ContactInfo user={user} />
  </div>
);

export default MessageAvatar;
