import React from 'react';
import TwoToneIcon from '../TwoToneIcon/TwoToneIcon';

const MessageBar = ({isMessageSelect, date}) => (
  <div className="message--bar">
    <div className="message--date">
      {date}
    </div>
    <TwoToneIcon size={16} icon="star" hoverable />
    {isMessageSelect && (
      <React.Fragment>
        <TwoToneIcon size={16} icon="delete" hoverable />
        <TwoToneIcon size={16} icon="more_vert" hoverable />
      </React.Fragment>
    )}
  </div>
);

export default MessageBar;
