import React from 'react';
import { connect } from 'react-redux';
import TopNavBar from 'components/layout/TopNavBar';
import Sidebar from 'components/layout/Sidebar';
import { requiresAuthentication } from 'utils/authentication';
const DefaultLayout = ({ children, user, logout }) => (
  <React.Fragment>
    <TopNavBar />
    <div className="columns flex-column-reverse-md">
      <div className="column-3 bg-dark shadow-lg" id="JS-Sidebar">
        <Sidebar user={user} logout={logout} />
      </div>
      <div className="column-9  offset-3 offset-0-md">
        <main className="px-1 px-0-md" id="content">
          {children}
        </main>
      </div>
    </div>
  </React.Fragment>
);

export default requiresAuthentication(DefaultLayout);
