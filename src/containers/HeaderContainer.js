import React from 'react'
import { connect } from 'react-redux'
import { SearchBar, NewsHeader } from 'components'
import { fetchNews } from '../actions/news'
import Grid from '@material-ui/core/Grid'

const HeaderContainer = props => {
  const { fetchNews } = props
  return (
    <React.Fragment>
      <Grid item xs>
        <NewsHeader gutterBottom />
      </Grid>
      <Grid item xs>
        <SearchBar onRequestSearch={fetchNews} />
      </Grid>
    </React.Fragment>
  )
}
export default connect(null, { fetchNews })(HeaderContainer)
