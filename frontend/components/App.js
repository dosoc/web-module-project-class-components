import React from 'react'
import TodoList from './TodoList'

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
  render() {
    const {todos} = this.state;
    console.log(todos)
    return (
      <div>
        <h1>Todos</h1>

        <TodoList todos={todos}/>

        <form>
          <input/>
          <button>Add</button>
        </form>

        <button>Clear</button>
      </div>
    )
  }
}
