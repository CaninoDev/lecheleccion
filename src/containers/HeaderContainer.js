import React from 'react'
import { connect } from 'react-redux'
import { SearchBar, NewsHeader } from 'components'
import { fetchQueriedNews } from '../actions/news'
import Grid from '@material-ui/core/Grid'

const HeaderContainer = props => {
  const { fetchQueriedNews } = props
  return (
    <React.Fragment>
      <Grid item>
        <NewsHeader />
      </Grid>
      <Grid item>
        <SearchBar onRequestSearch={fetchQueriedNews} />
      </Grid>
    </React.Fragment>
  )
}
export default connect(null, { fetchQueriedNews })(HeaderContainer)
