import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNews, fetchQueriedNews } from '../actions/news'
import Grid from '@material-ui/core/Grid'
import { NewsCard } from 'components';

class NewsContainer extends Component {
  render () {
    const { news, fetchQueriedNews } = this.props
    const NewsCardList = news.map(article => <NewsCard key={article.uuid} dataSet={article} />)
    return (
      <React.Fragment>
        <Grid container spacing={16}>
          {NewsCardList}
        </Grid>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return ({
    news: state.news.collection,
    user: state.user
  })
}

export default connect(mapStateToProps, { fetchNews, fetchQueriedNews })(NewsContainer)