import React from 'react';
import PropTypes from 'prop-types';
import TwoToneIcon from '../TwoToneIcon/TwoToneIcon';

const FoldersItem = ({folderName}) => {
    let color = '';
    if (folderName === 'Коллеги') color = ' blue';
    if (folderName === 'Путешествия') color = ' yellow';
    return (
      <div className="folders--item">
        <TwoToneIcon
          className={color}
          size={16}
          icon="folder" />
        {folderName}
      </div>
    )
};

FoldersItem.propTypes = {
  folderName: PropTypes.string.isRequired
}

export default FoldersItem;
