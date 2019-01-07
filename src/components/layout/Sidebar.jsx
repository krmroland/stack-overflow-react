import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconBook, IconPlus, IconUser, IconKey } from 'components/icons';
import userImage from 'assets/user.png';

export default ({ user, logout }) => (
  <aside>
    <section className="d-flex flex-column align-center bg-white py-2">
      <img src={userImage} alt="user avatar" className="h-150 rounded" />
      <h5 className="fw-600">{user.name}</h5>
    </section>
    <nav className="sidebar-links">
      <NavLink to="/" className="sidebar-link" exact>
        <i className="sidebar-link-icon">
          <IconBook />
        </i>
        <span className="sidebar-link-text">Questions</span>
      </NavLink>
      <NavLink to="/newQuestion" className="sidebar-link">
        <i className="sidebar-link-icon">
          <IconPlus />
        </i>
        <span className="sidebar-link-text">New Question</span>
      </NavLink>
      <NavLink to="/profile" className="sidebar-link">
        <i className="sidebar-link-icon">
          <IconUser />
        </i>
        <span className="sidebar-link-text">Profile</span>
      </NavLink>
      <a href="/login" className="sidebar-link" onClick={logout}>
        <i className="sidebar-link-icon">
          <IconKey />
        </i>
        <span className="sidebar-link-text">Sign Out</span>
      </a>
    </nav>
  </aside>
);
