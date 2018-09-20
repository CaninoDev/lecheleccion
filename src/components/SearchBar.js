import React, { Component } from 'react'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import FormControl from '@material-ui/core/FormControl'
import { InputLabel } from '@material-ui/core'
import Chip from '@material-ui/core/Chip'

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      searchTerm: []
    }

    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete = (index) => {
    let tempState = this.state.searchTerm
    tempState.splice(index, 1)
    this.setState({
      searchTerm: tempState
    })
    this.props.searchNews(this.state.searchTerm)
  }
  handleChange = (event) => {
    if (event.which !== 32) {
      this.setState({
        value: event.target.value
      })
    }
  }

  handleKeyPress = (event) => {
    const { searchTerm } = this.state
    if (event.which === 32) {
      event.preventDefault()
      searchTerm.push(event.target.value.trim())
      this.setState({
        value: '',
        searchTerm: searchTerm
      })
      this.props.searchNews(searchTerm)
    }
  }
  render () {
    const Chips = () => this.state.searchTerm.map((term, index) => (<Chip label={term.trim()} id={term.trim()} key={term.trim()} onDelete={() => this.handleDelete(index)} />))

    return (
      <div>
        <FormControl>
          <InputLabel>search</InputLabel>
          <Input
            type='search'
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            style={{textAlign: 'center'}}
            value={this.state.value}
            endAdornment={
              <InputAdornment position='end'>
                <SearchIcon />
              </InputAdornment>}
          />
        </FormControl>
        <br />
        {this.state.searchTerm.length > 0 && <Chips />}
      </div>
    )
  }
}

export default SearchBar
