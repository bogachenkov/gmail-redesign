import React from 'react';
import TwoToneIcon from '../TwoToneIcon/TwoToneIcon';

const SelectedAvatar = ({onClick}) => (
  <div onClick={onClick} className="conversations--avatar conversations--avatar-selected">
    <TwoToneIcon icon="check" size={20} />
  </div>
);

export default SelectedAvatar;
