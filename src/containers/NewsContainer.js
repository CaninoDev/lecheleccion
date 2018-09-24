import React, { Component } from 'react'
import { NewsCardsGrid } from '../components'
import { ActionCable } from 'react-actioncable-provider'
import Grid from '@material-ui/core/Grid'

class NewsContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      articles: []
    }
  }

  componentDidMount () {
    this.requestRecentArticles()
  }

  onReceived = (response) => {
    console.log(`response.article: ${response.article}`)
    const { article } = response
    const { articles } = this.state
    this.setState({
      articles: [...articles, article]
    })
  }

  requestRecentArticles = () => {
    this.refs.articlesCable.perform('recent', null)
  }

  componentDidMount () {
    this.requestRecentArticles()
  }
  render () {
    const { articles } = this.state
    return (
      <Grid item xs={9}>
        <ActionCable
          channel={{ channel: 'ArticlesChannel' }}
          onReceived={this.onReceived}
          ref='articlesCable'
        />
        { (articles > 0) && <NewsCardsGrid news={articles} /> }
      </Grid>
    )
  }
}


export default NewsContainer
