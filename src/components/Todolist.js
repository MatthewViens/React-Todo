import React from 'react';
import uuid from 'uuid/v4';
import Form from './Form';
import Todo from './Todo';
import '../styles/Todolist.css';

class Todolist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
    
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }
  
  addTodo(todo) {
    const newTodo = {
      text: todo,
      id: uuid()
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }
  
  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }
  
  updateTodo(id, updatedTask) {
    const updatedTodos = this.state.todos.map(todo => {
      if(todo.id === id) {
        return {...todo, text: updatedTask}
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos
    });
  }
  
  render() {
    return (
      <div className="Todolist">
      <h1>Todo List!</h1>
      <h2>A Simple React Todo List App.</h2>
        {this.state.todos.map(todo => (
          <Todo 
            text={todo.text} 
            id={todo.id} 
            key={todo.id} 
            removeTodo={this.removeTodo}
            updateTodo={this.updateTodo}
          />
        ))}
        <Form addTodo={this.addTodo} />
      </div>
    )
  }
}

export default Todolist;