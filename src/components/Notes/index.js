import React, { Component } from "react";

import "./style.css";

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : "",
    };
  }

  onChange = (value) => {
    this.setState({ notes: value }, () => {
      // save the notes in the local storage
      localStorage.setItem("notes", JSON.stringify(value));
    });
  };

  render() {
    return (
      <div className="notes">
        <div>
          <h1 className="app-header">Notes</h1>
        </div>
        <textarea
          type="text"
          name="notes"
          onChange={(e) => this.onChange(e.target.value)}
          value={this.state.notes}
          placeholder="Notes"
          autoComplete="off"
          className="notes-input"
        />
      </div>
    );
  }
}

export default Notes;