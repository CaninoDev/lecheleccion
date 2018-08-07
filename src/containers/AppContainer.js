import React, { Component } from 'react'

import { NewsCollection } from 'components'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchNews } from '../actions/news'

class AppContainer extends Component {
  componentDidMount() {
    this.props.fetchNews()
  }

  render () {
    return (
      <div>
      <br />
        <NewsCollection news={this.props.news} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return ({news: state.news.collection})
}
function mapDispatchToProps(dispatch) {
  return ({fetchNews: fetchNews})
  // return bindActionCreators( NewsActions, dispatch)
}
export default connect(mapStateToProps, { fetchNews })(AppContainer)