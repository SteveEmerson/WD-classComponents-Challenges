import React, { Component } from 'react';

class ToDoList extends Component {
  constructor(){
    super();
    this.state = {
      tasks: [],
      newTaskDescription: ""
    }
  }

  toggleTask = (e) => {
    console.log(e.target.id);
    let tempTasks = this.state.tasks;
    tempTasks[e.target.id].completed = !tempTasks[e.target.id].completed
    this.setState({tasks: tempTasks})
  }

  showTasks = () => {
    return this.state.tasks.map((task,index) => {
      return (
        <div>
          <span>{task.description} {task.completed ? "DONE!  ": "  "}</span>
          <input type="checkbox" checked={task.completed} id={index} onChange={this.toggleTask}></input>
        </div>
      )
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.newTaskDescription)
    this.setState({tasks: this.state.tasks.concat([{description:this.state.newTaskDescription, completed: false}])})
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({newTaskDescription: e.target.value});
  }

  render() {
    return(
      <div className="main">
        <h3>Create a new task</h3>
        <form>
          <label htmlFor="task">Enter Task</label>
          <input type="text" id="task" onChange={this.handleChange}/>
          <input type="submit" value="Submit" onClick={this.handleSubmit}/>
        </form>
        <h3>Task List</h3>
        {this.showTasks()}
      </div>
    )
  }
}

export default ToDoList;