import React, { Component } from 'react'

import { NewsCollection } from 'components'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as NewsActions from '../actions/news'

class AppContainer extends Component {
  componentDidMount() {
    this.props.fetchNews()
  }

  render () {
    return (
        <NewsCollection news={this.props.news} />
    )
  }
}

function mapStateToProps (state) {
  return ({news: state.news.collection})
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators( NewsActions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)