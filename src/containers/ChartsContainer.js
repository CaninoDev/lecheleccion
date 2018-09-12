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
    const { userBias, articlesBias } = this.props

    const data = [
      {
        'type': 'libertarian',
        'articles': articlesBias.libertarian,
        'user': userBias.libertarian
      },
      {
        'type': 'libertarian',
        'articles': articlesBias.libertarian,
        'user': userBias.libertarian
      }, {
        'type': 'green',
        'articles': articlesBias.green,
        'user': userBias.green
      }, {
        'type': 'liberal',
        'articles': articlesBias.liberal,
        'user': userBias.liberal
      }, {
        'type': 'conservative',
        'articles': articlesBias.conservative,
        'user': userBias.conservative
      }
    ]
    return (
      <BiasChart data={data} />
    )
  }
}

const mapStateToProps = state => ({
  user: state.users.currentUser,
  articlesBias: state.articles_bias,
  userBias: state.user_bias

})

export default connect(mapStateToProps, { fetchUserBias, fetchArticlesBias })(ChartsContainer)
