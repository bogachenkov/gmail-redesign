import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import TwoToneIcon from '../TwoToneIcon/TwoToneIcon';

const SidebarItem = ({href, label, icon, unreadedCounter}) => (
  <NavLink
    title={label}
    className="sidebar--item"
    activeClassName="sidebar--item-active"
    to={`/${href}`}>
    <TwoToneIcon icon={icon} size={18} />
    {label}
    {href === 'inbox' && unreadedCounter > 0 && <span className="sidebar--unreaded-counter">{unreadedCounter}</span>}
  </NavLink>
);

SidebarItem.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default SidebarItem;
