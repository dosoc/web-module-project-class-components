import React from 'react'

export default class Todo extends React.Component {

  handleClick = () => {
    this.props.handleToggle(this.props.todo.id)
  }

  render() {
    return (
      <li className='todo' onClick={this.handleClick}>{this.props.todo.task} {this.props.todo.completed?<span>-Completed</span>:<span></span>}</li>
    )
  }
}
