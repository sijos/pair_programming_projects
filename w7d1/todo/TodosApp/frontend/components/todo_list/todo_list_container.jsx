import {allTodos} from '../../reducers/selectors.js';
import {connect} from 'react-redux';
import TodoList from './todo_list';
import { updateTodo, removeTodo, fetchTodos, createTodo } from '../../actions/todo_actions.js';

const mapStateToProps = function(state) {
  // console.log(state.errors.errors);
  return {
    todos: allTodos(state),
    errors: state.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateTodo: (todo) => dispatch(updateTodo(todo)),
    removeTodo: (todo) => dispatch(removeTodo(todo)),
    fetchTodos: () => dispatch(fetchTodos()),
    createTodo: (todo) => dispatch(createTodo(todo))
   };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
