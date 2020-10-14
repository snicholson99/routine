import React, { Component } from 'react';
import './App.css';

import Clock from './components/Clock';
import Schedule from './components/Schedule';
import TodoList from './components/TodoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isSettingsOpen: false,
      isShowingSchedule: false,
    }
  }
  render() {
    const { isSettingsOpen, isShowingSchedule } = this.state;
    return (
      <div className="App">
        <section className="section section-one">
          <Clock />
          {isShowingSchedule && <Schedule />}
        </section>
        <section className="section section-two">
          <TodoList />
        </section>
        <footer>
          <p onClick={() => this.setState({ isSettingsOpen: !isSettingsOpen })}>Settings</p>
          {isSettingsOpen && (
            <div className="setting-checkbox-container">
              <input
                type="checkbox"
                id="is-showing-shedule"
                value={isShowingSchedule}
                onClick={() => this.setState({
                  isShowingSchedule: !isShowingSchedule
                })}
                />
              <label for="is-showing-shedule">Show Schedule</label>
            </div>
          )}
        </footer>
      </div>
    );
  }
}



export default App;
