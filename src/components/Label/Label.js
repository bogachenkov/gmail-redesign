import React from 'react';
import PropTypes from 'prop-types';
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

Label.propTypes = {
  folder: PropTypes.shape({
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })
}

export default Label;
