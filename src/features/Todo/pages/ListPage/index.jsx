import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import TodoList from "../../components/TodoList";
import { useHistory, useLocation, useRouteMatch } from "react-router";
import queryString from 'query-string'; 
import TodoForm from "../../components/TodoForm";

function ListPage(props) {
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

  const location = useLocation()
  const history = useHistory()
  const match = useRouteMatch()
  console.log(history);
  const [todoList, setTodoList] = useState(initTodoList)
  const [filleredStatus, setFilleredStatus] = useState(() => {
    const params = queryString.parse(location.search)
    console.log(params);
    return params.status || 'all'
  })

  useEffect(() => {
    const params = queryString.parse(location.search) 
    setFilleredStatus(params.status || 'all')
  },[location.search])

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

  const handleShowAllClick = () => {
    //setFilleredStatus('all')
    const queryParams = {status: 'all'}
    history.push({
        pathname: match.path,
        search: queryString.stringify(queryParams)
    })
  }
  const handleShowCompletedClick = () => {
    const queryParams = {status: 'completed'}
    history.push({
        pathname: match.path,
        search: queryString.stringify(queryParams)
    })
  }

  const handleShowNewClick = () => {
    const queryParams = {status: 'new'}
    history.push({
        pathname: match.path,
        search: queryString.stringify(queryParams)
    })
  }

  const renderedTodoList = useMemo(()=> {
      return todoList.filter(todo => filleredStatus === 'all' || filleredStatus === todo.status)
  }, [todoList, filleredStatus]) 

  console.log(renderedTodoList);

  const handleTodoFormSubmit = (values) => {
    console.log('value form',values);
    const newTodo = {
      id: todoList.length + 1,
      title: values.title,
      status: 'new'
    };

    const newTodoList = [...todoList, newTodo];

    setTodoList(newTodoList)
  }
  return (
    <div>
      <h2>What to do?</h2>
      <TodoForm onSubmit={handleTodoFormSubmit}/>
      <TodoList todoList={renderedTodoList} itemTodoClick = {handleTodoClick}/>
      <>
        <button onClick={() =>handleShowAllClick()}>Show all</button>
        <button onClick={() =>handleShowCompletedClick()}>Show completed</button>
        <button onClick={() =>handleShowNewClick()}>Show new</button>
      </>
    </div>
  );
}

ListPage.propTypes = {};

export default ListPage;
