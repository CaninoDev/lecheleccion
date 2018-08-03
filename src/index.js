import React from 'react';
import { render } from 'react-dom'
import Routes from 'routes'
import { Provider } from 'react-redux'
import configureStore from 'store'
import registerServiceWorker from './registerServiceWorker';

render(
  <Provider store={configureStore()}>
    <Routes />
  </Provider>,
   document.getElementById('root'));
registerServiceWorker();
