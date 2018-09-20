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
    const {news, isLoading, errorMessage, query, selectedNews} = this.props
    console.log(`query[0]: ${query[0]}, length: ${query.length}`)

    const renderComponent = () => {
      if (errorMessage !== null) {
        return (
          <ErrorPage />
        )
      } else if (isLoading === true && query.length < 1) {
        return (
          <div style={{ margin: { top: '100px', left: '300px' } }}>
            <CircularProgress />
          </div>
        )
      } else if (query.length > 0) {
        const str = query.map((word) => (`(?=.*\\b${word}\\b)`))
        const regexp = new RegExp(`${str.join('')}`, 'gi')
        let collection = news.filter((atomos) => (atomos.body.match(regexp) !== null))
        if (isLoading === false) {
          collection = collection.concat(selectedNews)
          return (
            <NewsCardsGrid news={collection} />
          )
        } else {
          return (
            <NewsCardsGrid news={collection} />
          )
        }
      } else if (isLoading === false && errorMessage === null && news && query.length === 0) {
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
  selectedNews: state.news.selectData,
  isLoading: state.news.loading,
  errorMessage: state.news.errorMessage,
  query: state.news.query
})

export default connect(mapStateToProps, { fetchNews })(NewsContainer)
