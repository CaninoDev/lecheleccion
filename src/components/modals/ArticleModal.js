import React, { Component } from 'react'
import Iframe from 'react-iframe'
import { AppBar, Toolbar } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'
import ThumbDownAlt from '@material-ui/icons/ThumbDownAlt'
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt'

function Transition (props) {
  return <Slide direction='up' {...props} />
}
const styles = {
  root: {
    flex: 1,
    alignItems: 'center'
  },
  container: {
    display: 'flex',
    flexWrap: 'nowrap'
  },
  flex: {
    flex: 1
  },
  appBar: {
    position: 'fixed',
    height: 24
  },
  dialog: {
    scroll: 'paper',
    height: '95%',
    width: '95%'
  },
  dialogPaper: {
    minHeight: '90vh',
    maxHeight: '90vh',
    minWidth: '110vh',
    maxWidth: '110vh'
  }
}

class ArticleModal extends Component {
  render () {
    const { isOpen, url, title, classes, closeModal } = this.props
    return (
      <div className={classes.root}>
        <Dialog
          open={isOpen}
          TransitionComponent={Transition}
          keepMounted
          onClose={closeModal}
          classes={{ paper: classes.dialogPaper }}
        >
          <DialogTitle>
            <AppBar>
              <Toolbar>
                <Typography
                  variant='subheading'
                  color='inherit'
                >
                  {title}
                </Typography>
                <IconButton
                  color='inherit'
                  onClick={() => closeModal(1)}
                  id='upVote'
                >
                  <ThumbUpAlt />
                </IconButton>
                <IconButton
                  color='inherit'
                  onClick={() => closeModal(0)}
                  id='downVote'
                >
                  <ThumbDownAlt />
                </IconButton>
                <IconButton
                  color='inherit'
                  onClick={() => closeModal(-1)}
                  id='close'
                  aria-label='Close'
                >
                  <CloseIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
          </DialogTitle>
          <DialogContent>
            <Iframe
              align='center'
              position='relative'
              url={url}
              width='80%'
              height='80%'
              display='initial'
            />
          </DialogContent>
        </Dialog>
      </div>
    )
  }
}
export default withStyles(styles)(ArticleModal)
