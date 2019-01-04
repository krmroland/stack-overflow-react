import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from 'store';
import Notifications from 'containers/Notifications';
import UILoader from 'containers/layouts/UILoader';
import { LoginPage, RegistrationPage, IndexPage } from 'views';

const App = () => (
  <Provider store={store}>
    <div>
      <Notifications />
      <UILoader />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/register" exact component={RegistrationPage} />
        </Switch>
      </BrowserRouter>
    </div>
  </Provider>
);

export default App;
