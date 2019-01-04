import React from 'react';
import { IconBook } from 'components/icons';

export default () => (
  <header className="text-white p-2 bg-dark h-75 fixed top-0 left-0 right-0 border-t-2 border-b-2 border-light shadow-lg">
    <div className="columns align-center">
      <div className="column-3">
        <section className="d-flex  align-center has-icon">
          <i className="d-flex icon-4 fill-accent-light">
            <IconBook />
          </i>
          <h5 className="fw-600 text-upper text-center spacing-2 pl-2">Stackoverflow</h5>
        </section>
      </div>
      <div className="column-6 px-4 d-none-md">
        <div className="d-flex">
          <input type="text" className="input" placeholder="Search the forum" />
          <button className="btn btn-light">Search</button>
        </div>
      </div>
    </div>
  </header>
);
