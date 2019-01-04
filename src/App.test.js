import React from 'react';
import ReactDOM from 'react-dom';
import { prepareUrl } from 'utils/helpers';
import App from './App';

it('renders without crashing', () => {
  fetch.get(prepareUrl('questions'), { body: { data: [] } });
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
