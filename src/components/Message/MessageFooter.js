import React from 'react';
import TwoToneIcon from '../TwoToneIcon/TwoToneIcon';

const MessageFooter = () => (
  <footer className="message--footer">
    <button className="message--action_button">
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
