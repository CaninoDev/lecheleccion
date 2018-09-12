import React, { Component } from 'react'
import { fetchUsersList, fetchUser } from '../../actions/users'
import { connect } from 'react-redux'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import List from '@material-ui/core/List'
import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import AccountCircle from '@material-ui/icons/AccountCircle'

class UsersListModal extends Component {
  state = {}
  componentDidMount () {
    this.props.fetchUsersList()
  }

  handleClick = clickInput => {
    this.props.closeModal()
    if (clickInput !== 'addAccount') {
      this.props.fetchUser(clickInput)
    } else {
      this.props.newUserModal()
    }
  }
  render () {
    const { users, isOpen, closeModal, isLoading, errorMessage } = this.props
    let listing
    if (errorMessage) {
      console.log(errorMessage)
    } else {
      if (!isLoading && !errorMessage && users !== null) {
        listing = users.map(user =>
          <ListItem button onClick={() => this.handleClick(user.name)} key={user.id}>
            <ListItemAvatar>
              <Avatar>
                <AccountCircle />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={user.name} />
          </ListItem>
        )
      }
    }

    return (
      <Dialog
        open={isOpen}
        onClose={closeModal}>
        <DialogTitle>Login/Register User</DialogTitle>
        <div>
          <List>
            {listing}
            <ListItem button onClick={() => this.handleClick('addAccount')}>
              <ListItemAvatar>
                <Avatar>
                  <AddIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='add account' />
            </ListItem>
          </List>
        </div>
      </Dialog>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users.accounts,
  isLoading: state.users.loading,
  errorMessage: state.users.errorMessage
})
export default connect(mapStateToProps, { fetchUsersList, fetchUser })(UsersListModal)
