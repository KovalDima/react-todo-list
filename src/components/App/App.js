import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import AppHeader from '../AppHeader'
import SearchPanel from '../SearchPanel'
import TodoList from '../TodoList'
import ItemStatusFilter from '../ItemStatusFilter'
import AddItemPanel from '../AddItemPanel'
import PROP_NAMES from '../../consts/prop_names'
import FILTER_STATES from '../../consts/filter_states'
import './app.scss'

class App extends Component {
  state = {
    todoData: [
      this.createTodoItem('Drink coffee'),
      this.createTodoItem('Create React app'),
      this.createTodoItem('Have a lunch')
    ],
    term: '',
    filter: FILTER_STATES.all
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: uuidv4()
    }
  }

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id)

      const newArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]

      return {
        todoData: newArr
      }
    })
  }

  addItem = text => {
    const newItem = this.createTodoItem(text)

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem]
      return {
        todoData: newArr
      }
    })
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex(el => el.id === id)

    const oldItem = arr[idx]
    const newItem = { ...oldItem, [propName]: !oldItem[propName] }

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]
  }

  onToggleImportant = id => {
    this.setState(({ todoData }) => ({
      todoData: this.toggleProperty(todoData, id, PROP_NAMES.important)
    }))
  }

  onToggleDone = id => {
    this.setState(({ todoData }) => ({
      todoData: this.toggleProperty(todoData, id, PROP_NAMES.done)
    }))
  }

  onSearchChange = term => this.setState({ term })

  onFilterChange = filter => this.setState({ filter })

  search(items, term) {
    if (term.length === 0) {
      return items
    }

    return items.filter(
      item => item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
    )
  }

  filter(items, filter) {
    switch (filter) {
      case FILTER_STATES.all:
        return items
      case FILTER_STATES.active:
        return items.filter(item => !item.done)
      case FILTER_STATES.done:
        return items.filter(item => item.done)
      default:
        return items
    }
  }

  render() {
    const { todoData, term, filter } = this.state

    const visibleItems = this.filter(this.search(todoData, term), filter)

    const doneCount = todoData.filter(el => el.done).length
    const todoCount = todoData.length - doneCount

    return (
      <div className='appСontainer'>
        <div className='appContainerWrapper'>
          <AppHeader todo={todoCount} done={doneCount} />
          <div className='topPanel'>
            <SearchPanel onSearchChange={this.onSearchChange} />
            <ItemStatusFilter
              filter={filter}
              onFilterChange={this.onFilterChange}
            />
          </div>
          <TodoList
            todos={visibleItems}
            onDeleted={this.deleteItem}
            onToggleImportant={this.onToggleImportant}
            onToggleDone={this.onToggleDone}
          />
          <AddItemPanel onItemAdd={this.addItem} />
        </div>
      </div>
    )
  }
}

export default App
