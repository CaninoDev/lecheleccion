import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core'
import { NewsHeader } from 'components'
import { filterNews } from '../actions/news'
import Grid from '@material-ui/core/Grid'

const styles = themes => ({
  header: {
    alignItems: 'center',
    alignContent: 'center',
    justify: 'center'
  }
})

const HeaderContainer = props => {
  const { classes } = props
  return (
    <React.Fragment>
      <Grid container direction='column' spacing={16} position='fixed'>
        <Grid item xs className={classes.header}>
          <NewsHeader />
        </Grid>
        <Grid item xs>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
export default connect(null, { filterNews })(withStyles(styles)(HeaderContainer))
