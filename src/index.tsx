import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from 'app';
import * as serviceWorker from 'serviceWorker';

import { history, initI18N } from 'utils';
import store from 'store';
import 'normalize.css';

initI18N();

ReactDOM.render(
  <Router history={history}>
    <Provider store={store()}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
