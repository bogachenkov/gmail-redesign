import React from 'react';
import TwoToneIcon from '../TwoToneIcon/TwoToneIcon';

const MessageBody = ({message, onSelectMsg, isMessageSelect}) => (
  <div className="message--body" onClick={onSelectMsg}>
    <p className="message--username">{message.from.name}</p>
    {isMessageSelect && (
      <React.Fragment>
        <div className="message--destination">
          {message.to.id === 0 && "кому: мне"}
          {message.to.id !== 0 && `кому: ${message.to.name}`}
          <TwoToneIcon icon="arrow_drop_down" size={14} />
        </div>
        <p className="message--text">
          {message.text}
        </p>
      </React.Fragment>
    )}
    {!isMessageSelect && (
      <p className="message--preview">{message.text}</p>
    )}
  </div>
);

export default MessageBody;
