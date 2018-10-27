import React from 'react';
import PropTypes from 'prop-types';

const SimpleAvatar = ({user, onClick}) => (
  <div
    onClick={onClick}
    className={user.avatar ? "conversations--avatar" : `conversations--avatar no-avatar ${user.color}`}
    style={{backgroundImage: `url("${user.avatar}")`}}>
      {user.avatar ? "" : user.name[0]}
  </div>
);

SimpleAvatar.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    color: PropTypes.string,
    name: PropTypes.string.isRequired
  }),
  onClick: PropTypes.func.isRequired
}

export default SimpleAvatar;
