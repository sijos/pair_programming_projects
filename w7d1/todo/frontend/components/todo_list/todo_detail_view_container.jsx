import {connect} from 'react-redux';
import {removeTodo} from '../../actions/todo_actions.js';
import TodoDetailView from './todo_detail_view.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    removeTodo: (todo) => dispatch(removeTodo(todo))
  };
};

export default connect(null, mapDispatchToProps)(TodoDetailView);
