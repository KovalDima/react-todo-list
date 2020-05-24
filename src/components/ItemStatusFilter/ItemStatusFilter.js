import React, { Component } from 'react'
import FILTER_STATES from '../../consts/filter_states'
import './itemStatusFilter.scss'

class ItemStatusFilter extends Component {
  buttons = [
    { name: FILTER_STATES.all, label: 'All' },
    { name: FILTER_STATES.active, label: 'Active' },
    { name: FILTER_STATES.done, label: 'Done' }
  ]

  render() {
    const { filter, onFilterChange } = this.props

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name

      const btnClass = isActive ? FILTER_STATES.active : ''

      return (
        <button
          type='button'
          className={`btnFilter ${btnClass}`}
          key={name}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      )
    })

    return <div className='btnFilterGroup'>{buttons}</div>
  }
}

export default ItemStatusFilter
