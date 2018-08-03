import React from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route 
} from 'react-router-dom'
import AppContainer from '../containers/AppContainer'

export default function Routes () {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route path='/' component={AppContainer} exact />
        </Switch>
      </React.Fragment>
    </Router>
  )
}