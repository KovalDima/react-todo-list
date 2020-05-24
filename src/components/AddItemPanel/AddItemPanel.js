import React, { Component } from 'react'
import './addItemPanel.scss'

class AddItemPanel extends Component {
  state = {
    label: ''
  }

  onLabelChange = e => {
    this.setState({
      label: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.onItemAdd(this.state.label)
    this.setState({
      label: ''
    })
  }

  render() {
    return (
      <form className='addItemContainer' onSubmit={this.onSubmit}>
        <input
          type='text'
          placeholder='Write a task'
          className='addItemPanel'
          onChange={this.onLabelChange}
          value={this.state.label}
          maxLength='60'
          required
        />
        <button type='submit' className='addItemBtn'>
          Add task
        </button>
      </form>
    )
  }
}

export default AddItemPanel
