import React from 'react';
import TodoListItem from './todo_list_item.jsx';
import TodoForm from './todo_form.jsx';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <section>
        <TodoForm createTodo={this.props.createTodo}/>

        <ul>
          {this.props.errors.map((err, idx) =>
            (<li key={"err-"+idx}><strong>{err}</strong></li>))
          }
        </ul>

        <ul>
          {this.props.todos.map((todo, idx) => {
            return (
              <TodoListItem key={"list-item-"+idx}
                self={todo}
                removeTodo={this.props.removeTodo}
                updateTodo={this.props.updateTodo}>
              </TodoListItem>
            );
          })
          }
        </ul>
      </section>
    );
  }
}

export default TodoList;
