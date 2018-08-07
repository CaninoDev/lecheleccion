import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '@material-ui/core/Typography'

const styles = {
  card: {
    maxWidth: 345
  },
  cardButton: {
    display: "block",
    textAlign: "initial"
  },
  media: {
    height: 200
  }
}

function NewsCard ({ classes, dataSet }) {
  return (
    <div>
    <Card className={classes.card}>
        <ButtonBase className={classes.cardButton}>
          <CardMedia
            className={classes.media}
            image={dataSet.urlToImage}
          />
          <CardContent>
            <Typography variant="headline" component="h2">
              {dataSet.title}
            </Typography>
            <Typography component="p">
              {dataSet.description}
            </Typography>
          </CardContent>
        </ButtonBase>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default withStyles(styles)(NewsCard)