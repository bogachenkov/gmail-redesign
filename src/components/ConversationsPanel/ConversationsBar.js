import React, { Component } from 'react';
import ReactSVG from 'react-svg';

import './conversations.css';

import noCheckIcon from './svg/twotone-check_box_outline_blank-24px.svg';
import checkedIcon from './svg/twotone-check_box-24px.svg';
import moreIcon from './svg/twotone-more_vert-24px.svg';

class ConversationsBar extends Component {

  state = {
    checkAll: false
  }

  checkAllHandler = () => {
    this.setState({
      checkAll: !this.state.checkAll
    });
  }

  render() {
    const {checkAll} = this.state;
    return (
      <div className="conversations--bar">
        <div className="conversations--checkAll" onClick={this.checkAllHandler}>
          {
            checkAll ?
            <ReactSVG className="icon-twotone hover" src={checkedIcon} /> :
            <ReactSVG className="icon-twotone hover" src={noCheckIcon} />
          }
        </div>
        <ReactSVG className="icon-twotone conversations--more hover" src={moreIcon} />
      </div>
    );
  }
}

export default ConversationsBar;
