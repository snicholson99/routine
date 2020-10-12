import React, { Component } from "react";
import "./style.css";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: "",
      tasklist: []
    };
  }

  // on load get the task list
  componentDidMount = () => {
    this.getTasks();
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // add task to the list
  onSubmit = () => {
    // check is task is empty string
    if (this.state.task) {
      // get the task list from the local storage
      let tasklist = JSON.parse(localStorage.getItem("tasklist"));

      // task list is null means empty
      // create an empty list
      if (tasklist == null) {
        tasklist = [];
      }

      // create task object
      // default status is false
      let task = {
        task: this.state.task,
        status: false
      };

      // add the task to the task list
      tasklist.push(task);

      // save the task list in the local storage
      localStorage.setItem("tasklist", JSON.stringify(tasklist));

      // clear the form
      this.setState({ task: "" });

      // refresh the tasks
      this.getTasks();
    }
  };

  // get all the tasks
  getTasks = () => {
    // get the task list from the local storage
    let tasklist = JSON.parse(localStorage.getItem("tasklist"));

    // check if task list is empty
    if (tasklist) {
      // sort all the tasks on the basis of status
      // completed task will move down
      tasklist = tasklist.sort((a, b) => {
        if (a.status) {
          return 1;
        } else if (b.status) {
          return -1;
        }
        return 0;
      });

      // save the task list in the local storage
      localStorage.setItem("tasklist", JSON.stringify(tasklist));

      // set the tasklist to the state
      this.setState({
        // default color
        // Incomplete: black
        // complete: green
        tasklist: tasklist.map((item, index) => {
          let cardStyle = { color: "black", background: "lightgrey" };
          let taskComplete = { textDecoration: "none" };

          if (item.status) {
            cardStyle.color = "green";
            cardStyle.background = "beige";
            taskComplete["textDecoration"] = "line-through";
          }
          return (
            <div key={index} className="task" style={cardStyle}>
              <div>
                <p className="task-body" style={taskComplete}>{item.task}</p>

                <div className="task-options">
                  {item.status ? (
                    <p className="task-option" onClick={() => this.undoTask(index)}>Undo</p>
                  ):(
                    <p className="task-option" onClick={() => this.updateTask(index)}>Done</p>
                  )}
                  <p className="task-option" onClick={() => this.deleteTask(index)}>Delete</p>
                </div>
              </div>
            </div>
          );
        })
      });
    }
  };

  // update the task status to true
  updateTask = index => {
    // get the task list from the local storage
    let tasklist = JSON.parse(localStorage.getItem("tasklist"));
    // change status to true
    tasklist[index].status = true;
    // save the updated task list
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
    // refresh the task list
    this.getTasks();
  };

  // undone the task status from true to false
  undoTask = index => {
    // get the task list from the local storage
    let tasklist = JSON.parse(localStorage.getItem("tasklist"));
    // change status to false
    tasklist[index].status = false;
    // save the updated task list
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
    // refresh the task list
    this.getTasks();
  };

  // delete the task from the task list
  deleteTask = index => {
    // get the task list from the local storage
    let tasklist = JSON.parse(localStorage.getItem("tasklist"));
    // remove the task from the task list
    tasklist.splice(index, 1);
    // save the updated task list
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
    // refresh the task list
    this.getTasks();
  };

  render() {
    return (
      <div className="todo-list">
        <div>
          <h1 className="app-header">My Task List</h1>{" "}
        </div>
        <div className="app-form">
          <form onSubmit={this.onSubmit} className="todo-form">
            <input
              type="text"
              name="task"
              onChange={this.onChange}
              value={this.state.task}
              placeholder="New task..."
              autoComplete="off"
              className="todo-input"
            />
            <button className="todo-submit" type="submit">Create</button>
          </form>
        </div>
        <div>
          <div className="task-list">{this.state.tasklist}</div>
        </div>
      </div>
    );
  }
}

export default TodoList;