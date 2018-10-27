import React from 'react';
import PropTypes from 'prop-types';
import TwoToneIcon from '../TwoToneIcon/TwoToneIcon';

const SelectedAvatar = ({onClick}) => (
  <div onClick={onClick} className="conversations--avatar conversations--avatar-selected">
    <TwoToneIcon icon="check" size={20} />
  </div>
);

SelectedAvatar.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default SelectedAvatar;
