import React, { Component } from 'react';


export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodos: ''
    }
  }
  handleChange(e){
    const {value} = e.target;
    this.setState({newTodos: value})
  }
  handleClick(e){
    e.preventDefault();
    const newtodo = [...this.state.todos, this.state.newTodos];
    this.setState({todos: newtodo, newTodos: ''})
  }
  render() {
    return (
      <div>
        <form>
          <input type="text" onChange={this.handleChange.bind(this)} value={this.state.newTodos} placeholder="Enter new todo"/>
          <button onClick={this.handleClick.bind(this)} >Add todo</button>
        </form>
    <ul>{this.state.todos.map((todo)=><li key={todo}>{todo}</li>)}</ul>
      </div>
    );
  }
}
