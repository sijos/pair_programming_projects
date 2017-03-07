import merge from 'lodash/merge';
import {RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO} from '../actions/todo_actions';
import {allTodos} from './selectors'; //for testing, remove later
const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

window.allTodos = allTodos({todos: initialState}); //for testing, remove later

const todosReducer = function (state = initialState, action) {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_TODOS:
      newState = action.todos;
      return newState;
    case RECEIVE_TODO:
      newState[action.todo.id] = action.todo;
      return newState;
    case REMOVE_TODO:
      delete newState[action.todo.id];
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
