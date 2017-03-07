import React from 'react';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <section>
      <p><small>{this.props.self.body}</small></p>
      <button onClick={ () => (
          this.props.removeTodo(this.props.self))}>
          DELETE TODO
        </button>
      STEPLIST GOES HEREE!!!!
    </section>
  );}
}

export default TodoDetailView;
