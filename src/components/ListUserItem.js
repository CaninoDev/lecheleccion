import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import PersonIcon from '@material-ui/icons/Person'

const ListUserItem = ({user, handleSelectedUser}) => (
  <ListItem
    button
    onClick={() => handleSelectedUser(user.name)}
    key={user.id}>
    <ListItemAvatar>
      <Avatar>
        <PersonIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary={user.name} />
  </ListItem>
)

export default ListUserItem
