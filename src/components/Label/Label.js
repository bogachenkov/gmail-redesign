import React from 'react';
import './label.css';
import TwoToneIcon from '../TwoToneIcon/TwoToneIcon';

const Label = ({folder}) => {
  let className="label";
  if (folder.type === 'team') className += " blue";
  if (folder.type === 'travels') className += " yellow";
  return (
    <span className={className}>
      {folder.title}
      <TwoToneIcon icon="close" size={8} />
    </span>
  )
}

export default Label;
