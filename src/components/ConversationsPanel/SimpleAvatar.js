import React from 'react';

const SimpleAvatar = ({user, onClick}) => (
  <div
    onClick={onClick}
    className={user.avatar ? "conversations--avatar" : `conversations--avatar no-avatar ${user.color}`}
    style={{backgroundImage: `url("${user.avatar}")`}}>
      {user.avatar ? "" : user.name[0]}
  </div>
);

export default SimpleAvatar;
