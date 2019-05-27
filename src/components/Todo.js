import React from 'react';
import '../styles/Todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isEditing: false,
      text: this.props.text
    }
    
    this.handleClick = this.handleClick.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleClick() {
    this.props.removeTodo(this.props.id)
  }
  
  toggleForm() {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.updateTodo(this.props.id, this.state.text);
    this.setState({
      isEditing: false
    })
  }
  
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  render() {
    return (
      <div className="Todo">
        {this.state.isEditing 
          ? <form onSubmit={this.handleSubmit}>
              <input 
                onChange={this.handleChange}
                value={this.state.text} 
                name="text" 
                type="text" />
            </form> 
          : <p>{this.props.text}</p>}
        <div>
          <i onClick={
            this.state.isEditing 
              ? this.handleSubmit
              : this.toggleForm} 
            className={
              this.state.isEditing
                ? "fas fa-pen isEditing"
                : "fas fa-pen"}
              ></i>
          <i onClick={this.handleClick} className="fas fa-trash"></i>
        </div>
      </div>
    )
  }
}

export default Todo;