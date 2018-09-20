import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import

class DashboardContainer extends Component {
  render () {
    return (
      <Grid container spacing={16} xs={9} >
        <Grid item xs>
          <Card profile>
            <CardAvatar profile>
              <a href='#pablo' onClick={e => e.preventDefault()}>
                <img src={avatar} alt='...' />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
              <h4 className={classes.cardTitle}>Alec Thompson</h4>
              <p className={classes.description}>
                Don't be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button color='primary' round>
                Follow
              </Button>
            </CardBody>
          </Card>
        </Grid>
      </Grid>

    )
  }
}
