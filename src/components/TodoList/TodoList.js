import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';

import TodoItem from '../TodoItem/TodoItem';

import List from 'material-ui/List';

const TodoList = ({todos, onTodoClick}) => {
  let todoList = todos.slice(0).reverse();

  return(
    <List>
      {todoList.map(todo => (
        <TodoItem key={todo.id} {...todo} onClick={(id) => onTodoClick(id)} />
      ))}
    </List>
  );
}
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList;
