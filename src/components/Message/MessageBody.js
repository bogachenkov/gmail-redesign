import React from 'react';
import PropTypes from 'prop-types';
import TwoToneIcon from '../TwoToneIcon/TwoToneIcon';

const MessageBody = ({message, onSelectMsg, isMessageSelect}) => (
  <div
    className={`message--body ${isMessageSelect ? 'selected' : ''}`}
    onClick={onSelectMsg}>
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

MessageBody.propTypes = {
  message: PropTypes.shape({
    from: PropTypes.object.isRequired,
    to: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired
  }),
  onSelectMsg: PropTypes.func.isRequired,
  isMessageSelect: PropTypes.bool.isRequired
}

export default MessageBody;
