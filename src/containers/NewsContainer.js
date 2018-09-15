import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNews } from '../actions/news'
import { ErrorPage, NewsCardsGrid } from 'components'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'

class NewsContainer extends Component {
  componentDidMount () {
    const { news } = this.props
    let number = (50 - news.count) || 50
    this.props.fetchNews(number: number)
  }
  renderComponent = (news, errorMessage, isLoading) => {
    if (errorMessage) {
      return (
        <ErrorPage />
      )
    } else if (!isLoading && !errorMessage) {
      return (
        <Grid item xs={9}>
          <NewsCardsGrid news={news} />
        </Grid>
      )
    } else {
      return (
        <Grid
          container
          spacing={0}
          direction='column'
          alignItems='center'
          justify='center'
          style={{ minHeights: '100vh' }}
        >
          <Grid item xs={3}>
            <CircularProgress />
          </Grid>
        </Grid>
      )
    }
  }

  render () {
    const { news, errorMessage, isLoading } = this.props

    return (
      <React.Fragment>
        {this.renderComponent(news, errorMessage, isLoading)}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  news: state.news,
  isLoading: state.news.loading,
  errorMessage: state.news.errorMessage
})

export default connect(mapStateToProps, { fetchNews })(NewsContainer)
