import React, { Component } from 'react';
import TwoToneIcon from '../TwoToneIcon/TwoToneIcon';
import FoldersItem from './FoldersItem';

import './folders.css';

class Folders extends Component {

  state = {
    folders: [
      'Клиенты',
      'Коллеги',
      'Реклама',
      'Путешествия'
    ]
  }

  render() {
    return (
      <div className="folders">
        <h3 className="folders--heading">
          Папки
          <TwoToneIcon className="folders--add" icon="add" hoverable size={12} />
        </h3>
        {
          this.state.folders.map(folder => (
            <FoldersItem
              key={folder}
              folderName={folder}
            />
          ))
        }
      </div>
    );
  }
}

export default Folders;
