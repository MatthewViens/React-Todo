import React from 'react';
import '../styles/Todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.props.removeTodo(this.props.id)
  }
  
  render() {
    return (
      <div className="Todo">
        <p>{this.props.text}</p>
        <div>
          <i class="fas fa-pen"></i>
          <i onClick={this.handleClick} class="fas fa-trash"></i>
        </div>
      </div>
    )
  }
}

export default Todo;