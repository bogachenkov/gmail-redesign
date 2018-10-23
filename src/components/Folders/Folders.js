import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import FoldersItem from './FoldersItem';

import './folders.css';

import addIcon from './svg/twotone-add-24px.svg';

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
          <ReactSVG className="icon-twotone hover folders--add" src={addIcon} />
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
