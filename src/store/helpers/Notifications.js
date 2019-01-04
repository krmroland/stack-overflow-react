import { setMessage, unSetMessage } from 'store/actions/notifications';

class Notifications {
  /**
   * Creates an instance of the Notifications class
   * @param  {redux-store} store
   */
  constructor(store) {
    this.store = store;
  }
  /**
   * FLashes a message of type error to the dom
   * @param  {String} message
   */
  error(message) {
    this.flash(message, 'danger');
  }
  /**
   * Flashes a message of type success to the dom
   * @param  {String} message
   */
  success(message) {
    this.flash(message, 'success');
  }

  flash(message, type) {
    // we will dispatch an action for setting the message
    this.store.dispatch(setMessage(message, type));
    //we will wait for a small time and we remove the notification
    let id = setTimeout(() => {
      this.store.dispatch(unSetMessage(message, type));
      //clear the interval to avoid memory licks
      clearTimeout(id);
    }, 5000);
  }
}

export default Notifications;
