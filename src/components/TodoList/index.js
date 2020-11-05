import React, { Component } from "react";
import arrayMove from 'array-move';
import { sortableContainer, sortableElement, sortableHandle } from 'react-sortable-hoc';

import "./style.css";

const DragHandle = sortableHandle(() => <i className="drag-handle task-option fas fa-grip-lines"></i>);

const SortableItem = sortableElement(({value}) => <li>{value}</li>);

const SortableList = sortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});

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
    this.taskInput.focus();
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
      this.taskInput.focus();
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
          let cardStyle = { color: "black", background: "#A4A4A4" };
          let taskComplete = { textDecoration: "none" };

          if (item.status) {
            cardStyle.color = "green";
            cardStyle.background = "beige";
            taskComplete["textDecoration"] = "line-through";
          }
          return (
            <div key={index} className="task" style={cardStyle}>
              {tasklist.length > 1 && (
                <div className="task-header">
                  <DragHandle />
                </div>
              )}
              <div className="task-main">
                <p className="task-body" style={taskComplete}>{item.task}</p>
              </div>

              <div className="task-options">
                {item.status ? (
                  <i className="task-option fas fa-undo" onClick={() => this.undoTask(index)}></i>
                ):(
                  <i className="task-option fas fa-check" onClick={() => this.updateTask(index)}></i>
                )}
                <i className="task-option fas fa-trash-alt" onClick={() => this.deleteTask(index)} alt="delete"></i>
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

  onSortEnd = ({oldIndex, newIndex}) => {
    // this.setState(({tasklist}) => ({
    //   tasklist: arrayMove(tasklist, oldIndex, newIndex),
    // }));

    // get the task list from the local storage
    let tasklist = JSON.parse(localStorage.getItem("tasklist"));
    // remove the task from the task list
    tasklist = arrayMove(tasklist, oldIndex, newIndex);
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
              ref={(input) => { this.taskInput = input; }}
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
        {/* <div> */}
          <div className="task-list">
            <SortableList items={this.state.tasklist} onSortEnd={this.onSortEnd} useDragHandle />
          </div>
        {/* </div> */}
      </div>
    );
  }
}

export default TodoList;