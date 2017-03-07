import React from 'react';
import TodoListItem from './todo_list_item.jsx';
import TodoForm from './todo_form.jsx';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <TodoForm receiveTodo={this.props.receiveTodo}/>
      <ul>
        {this.props.todos.map(todo => (
          // <li key={todo.id}>{todo.title}</li>
          <TodoListItem key={todo.id} self={todo}
            removeTodo={this.props.removeTodo}
            receiveTodo={this.props.receiveTodo}></TodoListItem>
        ))}
      </ul>
      </section>
    );
  }
}

export default TodoList;
