import React from 'react'
import { render } from 'react-dom'
import Routes from 'routes'
import { Provider } from 'react-redux'
import configureStore from 'store'
import registerServiceWorker from './registerServiceWorker'
import CssBaseline from '@material-ui/core/CssBaseline'

render(
  <Provider store={configureStore()}>
    <CssBaseline>
      <Routes />
    </CssBaseline>
  </Provider>,
  document.getElementById('root'))
registerServiceWorker()
