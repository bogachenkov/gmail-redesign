import React from 'react';

const MessageAvatar = ({user}) => (
  <div
    className={user.avatar ? "message--avatar" : `message--avatar no-avatar ${user.color}`}
    style={{backgroundImage: `url("${user.avatar}")`}}>
      {user.avatar ? "" : user.name[0]}
  </div>
);

export default MessageAvatar;
