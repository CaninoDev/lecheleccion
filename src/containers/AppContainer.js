import React, { Component } from 'react'

import { NewUserDialog } from 'components'

import { connect } from 'react-redux'
import { fetchUser } from '../actions/users';
class AppContainer extends Component {
  render () {
    const { user, fetchUser } = this.props
    return (
      <React.Fragment>
        {(user.length > 0) ? <NewsCollection /> : <NewUserDialog submitUser={this.props.fetchUser} open={true} /> }
        
      </React.Fragment>
    )
  }
}

function mapStateToProps (state) {
  return ({
    user: state.user.user
  })
}

export default connect(mapStateToProps, { fetchUser })(AppContainer)