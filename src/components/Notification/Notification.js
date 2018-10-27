import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './notification.css';

class Notification extends Component {

  render() {
    const {show, message} = this.props;
    if (!show) return null;
    return (
      <div className="notification">
        {message}
      </div>
    );
  }
}

Notification.propTypes = {
  show: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  show: state.notification.show,
  message: state.notification.message
});
export default connect(mapStateToProps)(Notification);
