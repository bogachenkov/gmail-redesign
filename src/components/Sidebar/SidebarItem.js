import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg';

const SidebarItem = ({href, label, icon}) => (
  <NavLink
    title={label}
    className="sidebar--item"
    activeClassName="sidebar--item-active"
    to={`/${href}`}>
    <ReactSVG className="icon-twotone" src={icon} />
    {label}
  </NavLink>
);

SidebarItem.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default SidebarItem;
