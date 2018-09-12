import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'

import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import ThumbDownAlt from '@material-ui/icons/ThumbDownAlt'
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt'
import Grid from '@material-ui/core/Grid'

const ArticleModalToolbar = props => {
  const { voteAndCloseModal } = props
  return (
    <div style={{ flex: 1 }}>
      <AppBar>
        <Grid direction='horizontal' container>
          <Grid item xs={8} />
          <Grid item xs>
            <Toolbar>
              <Typography
                variant='subheading'
                color='inherit'
              >
            La Lechelección
              </Typography>
              <IconButton
                color='inherit'
                onClick={() => voteAndCloseModal(1)}
                id='upVote'
              >
                <ThumbUpAlt />
              </IconButton>
              <IconButton
                color='inherit'
                onClick={() => voteAndCloseModal(0)}
                id='downVote'
              >
                <ThumbDownAlt />
              </IconButton>
              <IconButton
                color='inherit'
                onClick={() => voteAndCloseModal(-1)}
                id='close'
                aria-label='Close'
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  )
}
export default ArticleModalToolbar
