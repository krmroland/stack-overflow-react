import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { mapStateToProps } from 'store/helpers';

/**
 * Redirects to given url
 * @param  {String} to
 * @param  {Object} history
 * @return {Element}
 */
const redirect = (to, history) => (
  <Redirect
    to={{
      pathname: to,
      state: { from: history.location },
    }}
  />
);
/**
 * Provides a user prop to the given component
 * @param  {React.component} component
 * @return {HOC}
 */
const provideUser = component =>
  connect(mapStateToProps({ user: 'authentication.user' }))(withRouter(component));

/**
 * Renders a given component or redirects to a given URL based on the callback
 * @param  {Function} callback
 * @param  {String}   redirectTo
 * @param  {React.Component}   Component
 * @return {HOC}
 */
const renderOrRedirect = (callback, redirectTo, Component) => {
  const WrappedComponent = props => {
    const { user, history } = props;
    return callback(user) ? <Component {...props} /> : redirect(redirectTo, history);
  };

  return provideUser(WrappedComponent);
};

/**
 * Ensures that a user is authenticated before rendering a component
 * @param  {React.Component} Component
 * @return {HOC}
 */
export const requiresAuthentication = Component => {
  return renderOrRedirect(user => user, '/login', Component);
};

/**
 * Redirects if a user is already authenticated, usefull for authentication pages
 * @param  {React.Component} Component
 * @return {HOC}
 */
export const redirectsIfAuthenticated = Component => {
  return renderOrRedirect(user => !user, '/', Component);
};
