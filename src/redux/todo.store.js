import { createStore } from 'redux';
import { todoReducer } from './todo.reducer';

export let store = createStore(todoReducer);
