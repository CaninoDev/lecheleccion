import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Header } from 'components'
import { AppContainer } from 'containers'

function Routes () {
  return (
    <Router>
      <div>
        <Route path='/' component={AppContainer} />
      </div>
    </Router>
  )
}

export default Routes
