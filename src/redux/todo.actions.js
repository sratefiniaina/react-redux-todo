import { v4 } from 'node-uuid';

// ACTION TYPES START ----------------------
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const REMOVE_TODO = 'REMOVE_TODO';
// ACTION TYPES END ------------------------

// FILTERS START ---------------------------
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
// FILTERS END -----------------------------

// ACTION FUNCTIONS START ------------------
export function addTodo(payload) {
  return {
    type: ADD_TODO,
    id: v4(),
    text: payload
  };
}

export function toggleTodo(payload) {
  return {
    type: TOGGLE_TODO,
    payload
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id
  }
}
// ACTION FUNCTIONS END --------------------
