import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Todos</h1>

        <ul>
          <li>Drive to Chatanooga</li>
          <li>Read a book</li>
          <li>Win the State Open</li>
        </ul>

        <form>
          <input/>
          <button>Add</button>
        </form>

        <button>Clear</button>
      </div>
    )
  }
}
