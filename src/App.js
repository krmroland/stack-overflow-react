import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from 'store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => <h1>Hello world </h1>} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
