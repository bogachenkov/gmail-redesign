import React from 'react';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg';

import folderIcon from './svg/twotone-folder-24px.svg';

const FoldersItem = ({folderName}) => {
    let color = '';
    if (folderName === 'Коллеги') color = ' blue';
    if (folderName === 'Путешествия') color = ' yellow';
    return (
      <div className="folders--item">
        <ReactSVG
          className={"icon-twotone" + color}
          src={folderIcon} />
        {folderName}
      </div>
    )
};

FoldersItem.propTypes = {
  folderName: PropTypes.string.isRequired
}

export default FoldersItem;
