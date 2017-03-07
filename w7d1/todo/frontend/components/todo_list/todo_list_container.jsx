import {allTodos} from '../../reducers/selectors.js';
import {connect} from 'react-redux';
import TodoList from './todo_list';
import {receiveTodo, removeTodo} from '../../actions/todo_actions.js';

const mapStateToProps = function(state) {
  return { todos: allTodos(state) };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveTodo: (todo) => dispatch(receiveTodo(todo)),
    removeTodo: (todo) => dispatch(removeTodo(todo))
   };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
