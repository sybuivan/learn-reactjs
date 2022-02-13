import React from 'react'
import PropTypes from 'prop-types'

function TodoList({todoList}) {
  return (
    <ul>
        {
            todoList.map((todo) =>(
                <li key={todo.id}>{todo.title}</li>
            ))
        }
    </ul>
  )
}

TodoList.propTypes = {
    todoList: PropTypes.array
}

TodoList.defaultProps = {
    todoList: []
}

export default TodoList
