import React, { Component } from 'react'
import './searchPanel.scss'

class SearchPanel extends Component {
  state = {
    term: ''
  }

  onSearchChange = e => {
    const term = e.target.value
    this.setState({ term })
    this.props.onSearchChange(term)
  }

  render() {
    return (
      <input
        type='text'
        className='searchPanel'
        placeholder='Search'
        value={this.state.term}
        onChange={this.onSearchChange}
      />
    )
  }
}

export default SearchPanel
