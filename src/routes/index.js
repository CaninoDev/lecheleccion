import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { AppContainer } from 'containers'
import { About } from 'components'

function Routes () {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' component={AppContainer} />
          <Route path='/about' component={About} />
          <Redirect from='*' to='/' />
        </Switch>
      </div>
    </Router>
  )
}

export default Routes
