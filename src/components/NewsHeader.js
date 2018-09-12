import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import AccountCircle from '../assets/github_svg_icon'

function Header () {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <div>
          <IconButton>
            <AccountCircle />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header