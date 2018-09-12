import React from 'react'
import Typography from '@material-ui/core/Typography'

const NewsHeader = () => {
  return (
    <React.Fragment>
      <Typography variane='headline' gutterBottom> Today's Top Headlines </Typography>
      <Typography variane='captions' gutterBottom> News From Around the Web </Typography>
    </React.Fragment>
  )
}

export default NewsHeader
