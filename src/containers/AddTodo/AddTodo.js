import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/todo.actions';

import './AddTodo.css';

// MATERIAL UI INCLUDES ---------------------------------------------
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Typography from 'material-ui/Typography';
// ------------------------------------------------------------------

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <Typography type='headline'>
        What do you want to do today?
      </Typography>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input || !input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <TextField
          className='add-todo-text'
          type='text'
          inputRef={node => {
            input = node
          }}
        />
        <Button fab color="primary" aria-label="add" type='submit'>
          <AddIcon />
        </Button>
      </form>
    </div>
  )
}
AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired
}

AddTodo = connect()(AddTodo);

export default AddTodo;
