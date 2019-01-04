import React from 'react';
import { IconBook, IconCheck } from 'components/icons';

const Auth = ({ children }) => (
  <main id="Auth" className="columns shadow-lg">
    <section className="column-5  d-flex justify-center align-center bg-dark p-3  text-white flex-column">
      <i className="fill-white icon-6">
        <IconBook />
      </i>
      <h3 className=" fw-900 text-center text-h4-sm">Stack overflow</h3>
      <ul className="list-style-none  align-self-start">
        <li className="text-large py-1 has-icon">
          <i className="icon-3 fill-accent-light ">
            <IconCheck />
          </i>
          Join the community
        </li>
        <li className="text-large py-1 has-icon">
          <i className="icon-3 fill-accent-light ">
            <IconCheck />
          </i>
          Ask questions
        </li>
        <li className="text-large py-1 has-icon">
          <i className="icon-3 fill-accent-light ">
            <IconCheck />
          </i>
          Post Answers
        </li>
      </ul>
    </section>
    <section className="column-7 bg-white p-5 p-2-xl">{children}</section>
  </main>
);

export default Auth;
