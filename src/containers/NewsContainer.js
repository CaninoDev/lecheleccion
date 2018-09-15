import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNews } from '../actions/news'
import { ErrorPage, NewsCardsGrid } from 'components'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'

class NewsContainer extends Component {
  componentDidMount () {
    this.props.fetchNews()
  }
  renderComponent = (news, errorMessage, isLoading) => {
    if (errorMessage) {
      return (
        <ErrorPage />
      )
    } else if (!isLoading && !errorMessage) {
      return (
        <NewsCardsGrid news={news} />
      )
    } else {
      return (
        <CircularProgress />
      )
    }
  }

  render () {
    const { news, errorMessage, isLoading } = this.props

    return (
      <Grid item xs={9}>
        {this.renderComponent(news, errorMessage, isLoading)}
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  news: state.news,
  isLoading: state.news.loading,
  errorMessage: state.news.errorMessage
})

export default connect(mapStateToProps, { fetchNews })(NewsContainer)
