import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import Slide from '@material-ui/core/Slide'
import { DialogContentText, DialogActions, DialogTitle } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import ThumbDownAlt from '@material-ui/icons/ThumbDownAlt'
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt'

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
          <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
          <DialogContent>
            <DialogContentText>{body}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <IconButton
              onClick={() => voteAndCloseModal(1)}
              id='upVote'
            >
              <ThumbUpAlt />
            </IconButton>
            <IconButton
              onClick={() => voteAndCloseModal(0)}
              id='downVote'
            >
              <ThumbDownAlt />
            </IconButton>
            <IconButton
              onClick={() => voteAndCloseModal(-1)}
              id='close'
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
