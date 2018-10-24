import React from 'react';
import TwoToneIcon from '../TwoToneIcon/TwoToneIcon';

const MessageBody = ({message, onSelectMsg, users, user, isOpen, destUserId}) => (
  <div className="message--body" onClick={onSelectMsg}>
    <p className="message--username">{user.name}</p>
    {isOpen && (
      <React.Fragment>
        <div className="message--destination">
          {user.id !== 0 && "кому: мне"}
          {user.id === 0 && `кому: ${users.find(user => user.id === destUserId).name}`}
          <TwoToneIcon icon="arrow_drop_down" size={14} />
        </div>
        <p className="message--text">
          {message.text}
        </p>
      </React.Fragment>
    )}
    {!isOpen && (
      <p className="message--preview">{message.text}</p>
    )}
  </div>
);

export default MessageBody;
