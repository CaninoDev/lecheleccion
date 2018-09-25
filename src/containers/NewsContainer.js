import React, { Component } from 'react'
import { NewsCardsGrid } from '../components'
import Grid from '@material-ui/core/Grid'

const cable = require('actioncable-modules')


class NewsContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      articles: [],
    }
    this.articlesChannel = null
  }

  createSocket = () => {
    let socket = cable.createConsumer('http://localhost:3001/api/cable')
    this.articlesChannel = socket.subscriptions.create({
      channel: 'ArticlesChannel'
    }, {
      connected: () => {
        console.log('Connected')
        this.articlesChannel.poll()
      },
      disconnected: () => (
        console.log('Disconnected')
      ),
      rejected: () => (
        console.log('Rejected')
      ),
      received: (data) => {
        console.log(data)
        this.setState({
          articles: [...this.state.articles, data]
        })
      },
      poll: () => {
        console.log('POLLED')
        this.articlesChannel.perform('recent', null)
      }
    }
    )
  }

  componentDidMount () {
    this.createSocket()
  }

  render () {
    const { articles } = this.state
    return (
      <Grid item xs={9}>
        { (articles.length > 0) && <NewsCardsGrid news={articles} /> }
      </Grid>
    )
  }
}

export default NewsContainer
