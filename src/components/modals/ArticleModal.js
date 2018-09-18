import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import Fade from '@material-ui/core/Fade'
import { DialogTitle, DialogActions, Typography } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import ThumbDownAlt from '@material-ui/icons/ThumbDownAlt'
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt'

function Transition (props) {
  return <Fade in={props.isOpen} timeout={1000} {...props} />
}
class ArticleModal extends Component {
  render () {
    const { isOpen, title, body, source, voteAndCloseModal } = this.props
    return (
      <div>
        <Dialog
          onClose={voteAndCloseModal}
          open={isOpen}
          TransitionComponent={Transition}
          keepMounted
        >
          <DialogTitle><small><i>from</i></small> the {source}</DialogTitle>
          <DialogContent>
            <Typography variant='headline' gutterBottom>{title}</Typography>
            <Typography variant='body1'>{body}</Typography>
          </DialogContent>
          <DialogActions>
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
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default ArticleModal
