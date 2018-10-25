import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import './sidebar.css';

import SidebarSections from './SidebarSections';
import SidebarComposeBtn from './SidebarComposeBtn';
import Folders from '../Folders/Folders';
import SidebarOptions from './SidebarOptions';

class Sidebar extends Component {

  render() {
    return (
      <Scrollbars
        renderTrackVertical={props => <div {...props} style={{display: 'none'}} className="track-horizontal"/>}
        style={{ height: 'calc(100vh - 64px)' }}>
        <aside className="sidebar">
          <SidebarComposeBtn />
          <SidebarSections />
          <p className="sidebar--delimiter"></p>
          <Folders />
          <p className="sidebar--delimiter"></p>
          <SidebarOptions />
        </aside>
      </Scrollbars>
    );
  }
}

export default Sidebar;
