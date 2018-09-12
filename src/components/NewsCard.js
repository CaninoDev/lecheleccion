import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { ButtonBase } from '@material-ui/core'

const styles = theme => ({
  media: {
    height: '150px',
    width: '100%',
    padding: '5px',
    backgroundSize: 'cover',
    color: '#fff',
    position: 'relative'
  },
  cardHeaderTitle: {
    textTransform: 'uppercase',
    margin: 0,
    position: 'absolute',
    bottom: 0,
    left: 0
  },
  headLine: {
    fontFamily: 'Vidaloka'
  }
})

const NewsCard = props => {
  const {articleData, openArticleModal, classes, jsDate} = props
  return (
    <ButtonBase
      onClick={openArticleModal}
    >
      <Card className={classes.card}>
        <CardMedia
          image={articleData.urlToImage}
          className={classes.media}
        >
          <p className={classes.cardHeaderTitle}>{articleData.source}</p>
        </CardMedia>
        <CardContent>
          <Typography variant='caption'>{jsDate}</Typography>
          <Typography gutterBottom variant='subheading' component='h2'>{articleData.title}</Typography>
        </CardContent>
      </Card>
    </ButtonBase>
  )
}

export default withStyles(styles)(NewsCard)
