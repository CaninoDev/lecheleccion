import React, { Component } from 'react'
import '../../node_modules/react-vis/dist/style.css'
import { fetchUserBias, fetchArticlesBias } from '../actions/biases'
import { connect } from 'react-redux'
import { BiasChart } from 'components'
import Grid from '@material-ui/core/Grid'
class ChartsContainer extends Component {
  componentDidMount () {
    const { fetchUserBias, fetchArticlesBias, user } = this.props
    if (user) {
      fetchUserBias(user.id)
    }

    fetchArticlesBias()
  }
  render () {
    const { user_bias, articles_bias } = this.props
    let renderCharts = (function () {
      let buffer = []
      if (user_bias.loading === false && user_bias.data.bias !== undefined) {
        buffer.push(<BiasChart data={user_bias.data.bias} key='user' />)
      }

      if (articles_bias.loading === false && articles_bias.data !== undefined) {
        buffer.push(<BiasChart data={articles_bias.data} key='articles' />)
      }

      return buffer
    })()

    return (
      <Grid item xs={9}>
        {renderCharts}
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  user: state.users.currentUser,
  articles_bias: state.articles_bias,
  user_bias: state.user_bias

})

export default connect(mapStateToProps, { fetchUserBias, fetchArticlesBias })(ChartsContainer)
