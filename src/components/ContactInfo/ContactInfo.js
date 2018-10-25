import React, { Component } from 'react';
import TwoToneIcon from '../TwoToneIcon/TwoToneIcon';
import './contact-info.css';

class ContactInfo extends Component {
  render() {
    const {user} = this.props;
    return (
      <article className="contact-info">
        <header className="contact-info--header">
          <div
            className={user.avatar ? "contact-info--avatar" : `contact-info--avatar no-avatar ${user.color}`}
            style={{backgroundImage: `url("${user.avatar}")`}}>
            {user.avatar ? "" : user.name[0]}
          </div>
          <div className="contact-info--user">
            <h3 className="contact-info--name">
              {user.name}
            </h3>
            <p className="contact-info--email">{user.email}</p>
            <p className="contact-info--phone">{user.phone}</p>
          </div>
        </header>
        <div className="contact-info--body">
          <p className="contact-info--information">
            <TwoToneIcon size={14} icon="work" />
            {user.company}
          </p>
          <p className="contact-info--information">
            <TwoToneIcon size={14} icon="location_on" />
            {user.location}
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

export default ContactInfo;
