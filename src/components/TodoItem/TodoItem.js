import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

import RemoveTodo from '../../containers/RemoveTodo/RemoveTodo';

// MATERIAL UI INCLUDES ---------------------------------------------
import { ListItem, ListItemSecondaryAction } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
// ------------------------------------------------------------------

const TodoItem = ({onClick, completed, text, id}) => {
  return(
    <ListItem key={id}>
      <Checkbox
        checked={completed}
        tabIndex={-1}
        disableRipple
        onClick={() => onClick(id)}
      />
      {text}
      <ListItemSecondaryAction>
        <RemoveTodo id={id}/>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.bool.isRequired
}

export default TodoItem;
