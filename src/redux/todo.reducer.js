import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  REMOVE_TODO,
  VisibilityFilters
} from './todo.actions'

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter || VisibilityFilters.SHOW_ALL
      });
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      });
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            })
          }
          return todo;
        })
      });
    case REMOVE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.filter(item => item.id !== action.id)
      })
    default:
      return state
  }
}

export const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}
