import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Input } from 'forms';
import AuthLayout from 'containers/layouts/Auth';
import { mapActionsToProps } from 'store/helpers';
import { loginUser } from 'store/actions/authentication';

const RegisterPage = ({ authenticate }) => (
  <AuthLayout>
    <div className="p-1">
      <h3 className="fw-600 text-h4-sm">Register</h3>
      <Form
        name="singup-form"
        action="auth/signup"
        successSubmit={authenticate}
        button={() => (
          <div className="field d-flex d-block-md justify-between mt-3">
            <div>
              <button className="btn btn-primary btn-block-md">Register</button>
            </div>

            <div className="mt-3">
              <NavLink to="/login" className="d-block">
                Login Instead
              </NavLink>
            </div>
          </div>
        )}
      >
        <Input name="name" label="Name" />
        <Input name="email" type="email" label="Email" />
        <Input name="password" type="password" label="Password" />
        <Input name="password_confirmation" type="password" label="Confirm Password" />
      </Form>
    </div>
  </AuthLayout>
);

export default connect(null, mapActionsToProps({ authenticate: loginUser }))(RegisterPage);
