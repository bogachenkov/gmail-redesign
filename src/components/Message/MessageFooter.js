import React from 'react';
import TwoToneIcon from '../TwoToneIcon/TwoToneIcon';

const MessageFooter = ({toggleReply}) => (
  <footer className="message--footer">
    <button className="message--action_button" onClick={toggleReply}>
      <TwoToneIcon icon="reply" size={16} />
      Ответить
    </button>
    <button className="message--action_button">
      <TwoToneIcon icon="forward" size={16} />
      Переслать
    </button>
  </footer>
);

export default MessageFooter;
