import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { mapActionsToProps } from 'store/helpers';
import { Form, Input } from 'forms';
import AuthLayout from 'containers/layouts/Auth';
import { loginUser } from 'store/actions/authentication';

const LoginPage = ({ authenticate }) => (
  <AuthLayout>
    <div className="p-1">
      <h3 className="fw-600 text-h4-sm">Sign In</h3>
      <Form
        name="login-form"
        action="auth/login"
        successSubmit={authenticate}
        button={() => (
          <div className="field d-flex d-block-md justify-between mt-3">
            <div>
              <button className="btn btn-primary btn-block-md">Login</button>
            </div>

            <div className="mt-3">
              <NavLink to="/register" className="d-block">
                Register Instead
              </NavLink>
            </div>
          </div>
        )}
      >
        <Input name="email" type="email" label="Email" />
        <Input name="password" type="password" label="Password" />
      </Form>
    </div>
  </AuthLayout>
);

export default connect(null, mapActionsToProps({ authenticate: loginUser }))(LoginPage);
