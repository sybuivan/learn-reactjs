import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoList from "./components/TodoList";

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "completed"
    },
    {
      id: 2,
      title: "Sleep",
      status: "new"
    },
    {
      id: 3,
      title: "Code",
      status: "new"
    },
  ];
  const [todoList, setTodoList] = useState(initTodoList)

  const handleTodoClick = (index) => {
    // clone current array to the new
    const newTodoList = [...todoList]

    // toggle state
    const newTodo = {
      ...newTodoList[index],
      status: newTodoList[index].status === 'new' ? 'completed' : 'new'
    }
    newTodoList[index] = newTodo

    // update todolist
    setTodoList(newTodoList)
  }
  return (
    <div>
      <TodoList todoList={todoList} itemTodoClick = {handleTodoClick}/>
    </div>
  );
}

TodoFeature.propTypes = {};

export default TodoFeature;
