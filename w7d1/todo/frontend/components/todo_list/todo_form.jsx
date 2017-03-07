import React from 'react';

const defaultState = {
  title: "",
  body: "",
  id: undefined,
  done: false
};

function uniqueId() {
  return new Date().getTime();
}

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: "",
      id: undefined,
      done: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.state.id = uniqueId();
    this.props.receiveTodo(this.state);
    this.setState(defaultState);
  }

  updateTitle(e) {
    this.setState({ title: e.target.value });
  }

  updateBody(e) {
    this.setState({ body: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.title} placeholder="title"
          onChange={this.updateTitle}></input>
        <input type="text" value={this.state.body} placeholder="body"
          onChange={this.updateBody}></input>
        <input type="submit" value="Add Todo"></input>
      </form>
    );
  }

}

export default TodoForm;
