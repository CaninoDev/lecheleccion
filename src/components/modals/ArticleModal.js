import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import Slide from '@material-ui/core/Slide'
import { DialogContentText, DialogActions } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import ThumbDownAlt from '@material-ui/icons/ThumbDownAlt'
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt'
import Portal from '@material-ui/core/Portal'

function Transition (props) {
  return <Slide direction='up' {...props} />
}

class ArticleModal extends Component {
  render () {
    const { isOpen, title, body, voteAndCloseModal } = this.props
    return (
      <div>
        <Dialog
          onClose={voteAndCloseModal}
          open={isOpen}
          TransitionComponent={Transition}
          keepMounted
        >
          <DialogContent>
            <h1>{title}</h1>
            <h2>{body}</h2>
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
              <Portal container={this.container}>
                <DialogContentText position='fixed' variant='headline' gutterBottom>{title}</DialogContentText>
                <DialogContentText variant='body4'>{body}</DialogContentText>
              </Portal>
              <CloseIcon />
            </IconButton>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default ArticleModal
