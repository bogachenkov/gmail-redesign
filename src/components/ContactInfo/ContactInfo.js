import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TwoToneIcon from '../TwoToneIcon/TwoToneIcon';
import './contact-info.css';

class ContactInfo extends Component {
  render() {
    const {user} = this.props;
    const {avatar, color, name, email, phone, company, location} = user;
    return (
      <article className="contact-info">
        <header className="contact-info--header">
          <div
            className={avatar ? "contact-info--avatar" : `contact-info--avatar no-avatar ${color}`}
            style={{backgroundImage: `url("${avatar}")`}}>
            {avatar ? "" : name[0]}
          </div>
          <div className="contact-info--user">
            <h3 className="contact-info--name">
              {name}
            </h3>
            <p className="contact-info--email">{email}</p>
            <p className="contact-info--phone">{phone}</p>
          </div>
        </header>
        <div className="contact-info--body">
          <p className="contact-info--information">
            <TwoToneIcon size={14} icon="work" />
            {company}
          </p>
          <p className="contact-info--information">
            <TwoToneIcon size={14} icon="location_on" />
            {location}
          </p>
          <p className="contact-info--information">
            <TwoToneIcon size={14} icon="link" />
            <span className="contact-info--link first">Вконтакте</span> •
            <span className="contact-info--link">Twitter</span> •
            <span className="contact-info--link">Instagram</span>
          </p>
        </div>
        <footer className="contact-info--footer">
          <span className="contact-info--edit">Изменить</span>
          <div>
            <TwoToneIcon hoverable size={18} icon="today" />
            <TwoToneIcon hoverable size={18} icon="chat" />
            <TwoToneIcon hoverable size={18} icon="call" />
            <TwoToneIcon hoverable size={18} icon="video_cam" />
          </div>
        </footer>
      </article>
    );
  }
}

ContactInfo.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    color: PropTypes.string,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
  })
}

export default ContactInfo;
