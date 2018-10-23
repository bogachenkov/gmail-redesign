import React, { Component } from 'react';

import './sidebar.css';

import SidebarSections from './SidebarSections';
import SidebarComposeBtn from './SidebarComposeBtn';
import Folders from '../Folders/Folders';
import SidebarOptions from './SidebarOptions';

class Sidebar extends Component {

  render() {
    return (
      <aside className="sidebar">
        <SidebarComposeBtn />
        <SidebarSections />
        <p className="sidebar--delimiter"></p>
        <Folders />
        <p className="sidebar--delimiter"></p>
        <SidebarOptions />
      </aside>
    );
  }
}

export default Sidebar;
