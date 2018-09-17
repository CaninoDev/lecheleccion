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
  render () {
    const {news, isLoading, errorMessage} = this.props

    const renderComponent = () => {
      if (errorMessage !== null) {
        return (
          <ErrorPage />
        )
      } else if (isLoading === true) {
        return (
          <div style={{margin: { top: '100px', left: '300px'}}}>
            <CircularProgress />
          </div>
        )
      } else if (isLoading === false && errorMessage === null && news) {
        return (
          <NewsCardsGrid news={news} />
        )
      }
    }

    return (
      <Grid item xs={9}>
        {renderComponent()}
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  news: state.news.data,
  isLoading: state.news.loading,
  errorMessage: state.news.errorMessage
})

export default connect(mapStateToProps, { fetchNews })(NewsContainer)
