import React from 'react'
import './appHeader.scss'

const AppHeader = ({ todo, done }) => {
  return (
    <div className='appHeaderContainer'>
      <h1 className='appHeader'>Todo list</h1>
      <div className='leftToDo'>
        {todo} left to do, {done} done
      </div>
    </div>
  )
}

export default AppHeader
