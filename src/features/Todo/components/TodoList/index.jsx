import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./style.scss";

function TodoList({ todoList,itemTodoClick }) {
  const handleTodoClick = (todo,index) => {
    if(!itemTodoClick) return;

    itemTodoClick(index)
  }
  return (
    <ul className="todo-list">
      {todoList.map((todo, index) => (
        <li
          key={todo.id}
          className={classNames({
            "todo-item": true,
            completed: todo.status === "completed",
          })}
          onClick={() => handleTodoClick(todo,index)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  handleTodoClick: PropTypes.func
};

TodoList.defaultProps = {
  todoList: [],
  handleTodoClick: null
};

export default TodoList;
