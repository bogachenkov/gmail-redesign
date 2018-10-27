import React from 'react';
import PropTypes from 'prop-types';
import TwoToneIcon from '../TwoToneIcon/TwoToneIcon';

const MessageBar = ({isMessageSelect, date, deleteMessage}) => (
  <div className="message--bar">
    <div className="message--date">
      {date}
    </div>
    <TwoToneIcon size={16} icon="star" hoverable />
    {isMessageSelect && (
      <div className="message--additional">
        <div onClick={deleteMessage}>
          <TwoToneIcon size={16} icon="delete" hoverable />
        </div>
        <div>
          <TwoToneIcon size={16} icon="more_vert" hoverable />
        </div>
      </div>
    )}
  </div>
);

MessageBar.propTypes = {
  isMessageSelect: PropTypes.bool.isRequired,
  date: PropTypes.string.isRequired,
  deleteMessage: PropTypes.func.isRequired
}

export default MessageBar;
