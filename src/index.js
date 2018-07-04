import ReactDOM from 'react-dom';
import React from 'react';

import { Provider } from 'react-redux';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './containers/App.jsx';


// import routes from './routes';

import store from './store';


import 'normalize.css';
import 'styles/_main.scss';


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
