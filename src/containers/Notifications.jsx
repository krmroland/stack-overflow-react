import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { mapStateToProps } from 'store/helpers';
/**
 * Animation class to be added when the notification is being shown
 * @type {String}
 */
const ANIMATE_IN_CLASS = 'bounceInUp';

const Notifications = ({ message, className }) =>
  message ? (
    <div className={classNames('notification', className, ANIMATE_IN_CLASS)}>{message}</div>
  ) : null;

export default connect(
  mapStateToProps({ message: 'notifications.message', className: 'notifications.className' }),
)(Notifications);
