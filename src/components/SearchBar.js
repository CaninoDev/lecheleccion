import React, { Component } from 'react'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'

class SearchBar extends Component {
  state = {
    value: ''
  }
  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.props.onRequestSearch(this.state.value)
    }
  }

  render () {
    return (
      <div>
        <Input
          type='search'
          onChange={(e) => this.handleChange}
          onKeyPress={(e) => this.handleKeyPress}
          style={{textAlign: 'center'}}
          endAdornment={
            <InputAdornment position='end'>
              <SearchIcon />
            </InputAdornment>}
        />
      </div>
    )
  }
}

export default SearchBar
