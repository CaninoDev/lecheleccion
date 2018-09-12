import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNews } from '../actions/news'
import { ErrorPage } from 'components'
import { NewsCardContainer } from 'containers'
import StackGrid, { transitions, easings } from 'react-stack-grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'

const { helix } = transitions

class NewsContainer extends Component {
  componentDidMount () {
    this.props.fetchNews()
  }

  render () {
    const { news, errorMessage, isLoading } = this.props

    if (errorMessage) {
      return (
        <ErrorPage />
      )
    } else if (!isLoading && !errorMessage) {
      return (
        <Grid item xs={9}>
          <StackGrid
            columnWidth={320}
            duration={960}
            gutterWidth={16}
            gutterHeight={16}
            easing={easings.quartOut}
            appear={helix.appear}
            appeared={helix.appeared}
            enter={helix.enter}
            entered={helix.entered}
            leaved={helix.leaved}
          >
            {news.collection.map((article, idx) => (
              <NewsCardContainer key={idx} articleData={article} />
            ))}
          </StackGrid>
        </Grid>
      )
    } else {
      return (
        <CircularProgress />
      )
    }
  }
}

const mapStateToProps = state => ({
  news: state.news,
  isLoading: state.news.loading,
  errorMessage: state.news.errorMessage
})

export default connect(mapStateToProps, { fetchNews })(NewsContainer)
