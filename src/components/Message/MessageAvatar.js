import React from 'react';
import PropTypes from 'prop-types';
import ContactInfo from '../ContactInfo/ContactInfo';

const MessageAvatar = ({user}) => (
  <div
    className={user.avatar ? "message--avatar" : `message--avatar no-avatar ${user.color}`}
    style={{backgroundImage: `url("${user.avatar}")`}}>
      {user.avatar ? "" : user.name[0]}
      <ContactInfo user={user} />
  </div>
);

MessageAvatar.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    color: PropTypes.string,
    name: PropTypes.string.isRequired
  })
}

export default MessageAvatar;
