import {combineReducers} from 'redux';
import todosReducer from './todo_reducer';
import errorsReducer from './error_reducer';

export const rootReducer = combineReducers({
  todos: todosReducer,
  errors: errorsReducer
});
