import React, { Component } from 'react'
import { ListUserItem, NewUserDialog } from 'components'
import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import AddIcon from '@material-ui/icons/Add'

export default class LoginDialog extends Component {
  constructor (props) {
    super(props)
    this.state = ({
      open: true,
      users: [],
      showNewUserComponent: false
    })
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState({
      showNewUserComponent: true
    })
  }

  componentDidMount () {
    this.fetchUsersList()
  }

  fetchUsersList = () => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => this.setState({
        users: data
      }))
      // .then(data => console.log(data) this.setState({
      //   users: data
      // }))
      .catch(error => console.log(error))
  }

  handleClose = () => {
    this.setState({open: false})
  }

  isPopulated = () => { return (this.props.users !== undefined || this.props.users.length > 0) }

  /* an ugly attempt at brute forcing this modal to display content properly. Still doesn't work */
  renderUserList = () => {
    const { handleSelectedUser } = this.props
    const { users } = this.state
    return ((this.isPopulated) ? users.map(user => { return <ListUserItem user={user} handleSelectedUser={handleSelectedUser} /> }) : null)
  }

  render () {
    const { handleSelectedUser, users } = this.props
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}>
          <DialogTitle
            id='register-or-login-dialog'>
              Login / Create Account
          </DialogTitle>
          <List>
            {(users) ? users.map(user => <ListUserItem user={user} handleSelectedUser={handleSelectedUser} />) : null}
            <ListItem
              button
              onClick={this.handleClick}
              key='createAccount'>
              <ListItemAvatar>
                <Avatar>
                  <AddIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary='create account'
              />
            </ListItem>
          </List>
        </Dialog>
        {this.state.showNewUserComponent ? <NewUserDialog open handleSelectedUser={handleSelectedUser} /> : null}
      </div>
    )
  }
}
