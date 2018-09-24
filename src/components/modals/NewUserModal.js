import React, { Component } from 'react'
import { fetchUser } from '../../actions/users'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import { Dialog } from '@material-ui/core'
import Typography from '@material-ui/core/Typography/Typography'

class NewUserModal extends Component {
  state = {
    name: ''
  }
  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }
  handleSubmit = () => {
    this.props.fetchUser(this.state.name)
    this.props.closeModal()
  }

  render () {
    const { name } = this.state
    const { isOpen, closeModal } = this.props
    const isEnabled = (name.length > 0)
    return (
      <React.Fragment>
        <Dialog
          open={isOpen}
          onClose={closeModal}>
          <DialogTitle>Welcome to Lechelección</DialogTitle>
          <DialogContent>
              <Typography variant='body1'>Lechélección alludes to a Spanish phenomena to incorporate 'leche' (milk) in many of their idioms. Often times, its usage can refer to one meaning as well as its opposite. 'Ser la leche' (Be the Milk) is a popular example of this. This application will present to you an option to search on politiical issues of interest. With each click, this application will assess your personal political bias as the general political bias of news articles as they are provided.</Typography>
            <TextField
              value={name}
              autoComplete=''
              onChange={this.handleChange}
              autoFocus
              required
              margin='dense'
              label='Your Name'
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button
              disabled={!isEnabled}
              onClick={this.handleSubmit}
            >Submit</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    )
  }
}

export default connect(null, { fetchUser })(NewUserModal)
