import {
  getRekd,
  posterBoy,
  patchAdams
 } from '../utils/todo_api_utils';
import { receiveErrors, CLEAR_ERRORS } from './error_actions';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const receiveTodos = function(todos) {
  return { type: RECEIVE_TODOS, todos };
};

export const receiveTodo = function(todo) {
  return { type: RECEIVE_TODO, todo };
};

export const removeTodo = function(todo) {
  return { type: REMOVE_TODO, todo };
};

export const fetchTodos = () => (dispatch) => {
  return getRekd().then(todos => dispatch(receiveTodos(todos)));
};

export const createTodo = (formTodo) => (dispatch) => {
  return posterBoy(formTodo)
    .then(
      todo => dispatch(receiveTodo(todo)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
    .then(
      dispatch({ type: CLEAR_ERRORS })
    );
};

export const updateTodo = (formTodo) => (dispatch) => {
  return patchAdams(formTodo)
    .then(
      todo => dispatch(receiveTodo(todo)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
    .then(
      dispatch({ type: CLEAR_ERRORS })
    );
};
