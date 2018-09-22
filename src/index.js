import React from 'react'
import { render } from 'react-dom'
import Routes from 'routes'
import { Provider } from 'react-redux'
import configureStore from 'store'
import registerServiceWorker from './registerServiceWorker'
import CssBaseline from '@material-ui/core/CssBaseline'
import { API_WS_ROOT } from './constants'
import { ActionCableProvider } from 'react-actioncable-provider'

render(
  <Provider store={configureStore()}>
    <CssBaseline>
      <ActionCableProvider url={API_WS_ROOT}>
        {console.log(API_WS_ROOT)}
        <Routes />
      </ActionCableProvider>
    </CssBaseline>
  </Provider>,
  document.getElementById('root'))
registerServiceWorker()
