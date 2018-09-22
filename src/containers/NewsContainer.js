import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ErrorPage, NewsCardsGrid } from 'components'
import { ActionCable } from 'react-actioncable-provider'
import Grid from '@material-ui/core/Grid'

class NewsContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      articles: []
    }
  }

  static async triggerAction () {
    try {
      const response = await fetch('/api/articles')
      if (!response.ok) {
        throw (response.json())
      }
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount () {
    NewsContainer.triggerAction()
  }

  handleReceivedArticles = response => {
    const { article } = response
    const { articles } = this.state
    this.setState({
      articles: [...articles, article]
    })
  }
  // render () {
  //   const {article, isLoading, errorMessage, query, selectedNews} = this.props
  //   console.log(`query[0]: ${query[0]}, length: ${query.length}`)
  //
  //   function renderComponent () {
  //     if (errorMessage !== null) {
  //       return (
  //         <ErrorPage />
  //       )
  //     } else if (isLoading === true && query.length < 1) {
  //       return (
  //         <div style={{ margin: { top: '400', left: '500px' } }}>
  //           <CircularProgress />
  //         </div>
  //       )
  //     } else if (query.length > 0) {
  //       /* The following regular expression will match all words in whatever order they may appear in a given string */
  //       const str = query.map((word) => (`(?=.*\\b${word}\\b)`))
  //       const regexp = new RegExp(`${str.join('')}`, 'gi')
  //
  //       /* filter the current collection by the query terms */
  //       let collection = news.filter((atomos) => (atomos.body.match(regexp) !== null))
  //
  //       /* check to see if the new search query from remote api made it through */
  //       if (isLoading === false) {
  //         collection = collection.concat(selectedNews)
  //       }
  //
  //       return (
  //         <NewsCardsGrid news={collection} />
  //       )
  //     } else if (isLoading === false && errorMessage === null && article && query.length === 0) {
  //       return (
  //         <NewsCardsGrid data={article} />
  //       )
  //     }
  //   }
  render () {
    const { articles } = this.state
    return (
      <Grid item xs={9}>
        <ActionCable
          channel={{ channel: 'ArticlesChannel' }}
          onReceived={this.handleReceivedArticles}
        />
        {articles && <NewsCardsGrid news={articles} /> }
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  article: state.news.data,
  selectedNews: state.news.selectData,
  isLoading: state.news.loading,
  errorMessage: state.news.errorMessage,
  query: state.news.query
})

export default connect(mapStateToProps, null)(NewsContainer)
