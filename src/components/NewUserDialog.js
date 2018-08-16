import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField'
class NewUserLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      keepOpen: this.props.open
    }
  }
  handleChange = value => (
    this.setState({
      name: value
    })
  )

  handleSubmit = () => {
    this.props.submitUser(this.state.name)
    this.setState({
      keepOpen: false
    })
  }

  render () {
    const { keepOpen, name } = this.state
    return (
      <Dialog
        open={keepOpen}
        disableBackdropClick
        disableEscapeKeyDown
        >
        <DialogTitle id='new-user-dialog-title'>Enter Your Name</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Lechéleción alludes to a Spanish phenomena to incorporate 'leche' (milk) in many of their idioms. Often times, its usage can refer to one meaning as well as its opposite. 'Ser la leche' (Be the Milk) is a popular example of this. 
          This application will present to you an option to search on politiical issues of interest. As you click and read articles of your choice, a rattin.....bBLASBDLAKSL
          </DialogContentText>
          <TextField
            value={this.state.name}
            onChange={e => this.setState({
              name: e.target.value
              })
            }
            autoFocus
            required
            margin='dense'
            label='name'
            id='name'
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={this.handleSubmit} 
          >Submit</Button>
        </DialogActions>
      </Dialog>
    )
  }
}


export default NewUserLogin