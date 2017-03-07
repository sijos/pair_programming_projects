import React from 'react';
import merge from 'lodash/merge';
import TodoDetailView from './todo_detail_view.jsx';
import TodoDetailContainer from './todo_detail_view_container';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: false,
    };
    this.toggleDun = this.toggleDun.bind(this);
  }

  toggleDun() {
    let newState = merge({}, this.props.self);
    newState.done = !newState.done;
    this.props.receiveTodo(newState);
  }

  toggleDetail() {
    this.setState({detail: !this.state.detail});
  }

  render() {
    let detailView = this.state.detail ?
      <TodoDetailContainer self={this.props.self} /> : "";

    return(
    <li>
      <h4 onClick={ () => (this.toggleDetail())}>
        {this.props.self.title}
      </h4>
      Finished:
      <button onClick= { () => (this.toggleDun())}>
          {this.props.self.done.toString()}
      </button>
      {detailView}
    </li>);
  }

}

export default TodoListItem;
