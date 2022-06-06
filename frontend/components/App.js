import React from 'react'
import TodoList from './TodoList';
import Form from './Form'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Win the State Open",
          id: 10000,
          completed: false
        },
        {
          task: "Read a book",
          id: 10001,
          completed: false
        },
        {
          task: "Make the Cut",
          id: 10002,
          completed: false
        }
      ]
    }
  }

  handleAdd = (task) => {

    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false
    }

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    })
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todos => {
        return todos.completed === false
      })
    });
  }

  handleToggle = (clickedID) => {

  
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo=> {
        if (todo.id === clickedID){
          return {
            ...todo,
            completed: !todo.completed
          }
        }

        return todo;
      })
    })
  }

  render() {
    const {todos} = this.state;
    console.log(todos)
    return (
      <div>
        <h1>Todos</h1>
        <TodoList todos={todos} handleToggle={this.handleToggle}/>
        <Form handleAdd={this.handleAdd} />
        <button onClick={this.handleClear}>Clear</button>
      </div>
    )
  }
}
