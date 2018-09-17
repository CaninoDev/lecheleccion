import React from 'react'
import Typography from '@material-ui/core/Typography'

const NewsHeader = () => {
  return (
    <React.Fragment>
      <Typography variant='headline'>Today's Top Headlines</Typography>
      <Typography variant='subheading' gutterBottom> News From Around the Web </Typography>
    </React.Fragment>
  )
}

export default NewsHeader
