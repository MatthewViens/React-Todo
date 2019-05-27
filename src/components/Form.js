import React from 'react';
import '../styles/Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: ''
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  handleSubmit(e) {
    e.preventDefault();
    if(this.state.todoText.trim() !== '') {
      this.props.addTodo(this.state.todoText);
      this.setState({
        todoText: ''
      });
    }
  }
  
  render() {
    return (
      <div className="Form">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="todoText">New Todo</label>
          <div>
            <input
              type="text"
              name="todoText"
              id="todoText"
              value={this.state.todoText}
              onChange={this.handleChange}
            />
            <button>Add Todo</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Form;