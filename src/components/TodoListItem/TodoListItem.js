import React from 'react'
import './todoListItem.scss'
import TrashIcon from './TrashIcon'
import ImportantIcon from './ImportantIcon'

function TodoListItem(props) {
  const {
    label,
    onDeleted,
    onToggleImportant,
    onToggleDone,
    done,
    important
  } = props

  let classNames = 'listItemLabel'
  if (done) {
    classNames += ' done'
  }
  if (important) {
    classNames += ' important'
  }

  return (
    <>
      <span className={classNames} onClick={onToggleDone} title={label}>
        {label}
      </span>
      <div className='btnWrapper'>
        <button type='button' className='btnTrash' onClick={onDeleted}>
          <TrashIcon />
        </button>
        <button
          type='button'
          className='btnImportant'
          onClick={onToggleImportant}
        >
          <ImportantIcon />
        </button>
      </div>
    </>
  )
}

export default TodoListItem
