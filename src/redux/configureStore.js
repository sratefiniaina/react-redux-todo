import { createStore } from 'redux'
import { todoReducer } from './todo.reducer'
import { loadState, saveState } from '../localStorage';
import throttle from 'lodash/throttle';


export const configureStore = () => {
  const persistedState = loadState();

  let store = createStore(
    todoReducer,
    persistedState
  );

  store.subscribe(throttle(() => {
    saveState(store.getState());
  }, 1000));

  return store;
}
