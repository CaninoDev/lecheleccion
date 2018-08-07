import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { NewsCard } from 'components'
// import { Grid } from '@material-ui/core/styles';
const styles = theme => ({
  root: {
    flexGrow: 1,
  }
})
class NewsCollection extends Component {
    render () {
      const { classes, news } = this.props
      return (
        <Grid container className={classes.root} spacing={16}>
          <Grid item xs={12}>
            <Grid container className={classes.grid} justify="center" spacing={32}>
              {news.map((dataSet) => <NewsCard dataSet={dataSet} />)}
            </Grid>
          </Grid>
        </Grid>
    )
  }
}
export default withStyles(styles)(NewsCollection)