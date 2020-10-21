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
        <header>
          {isSettingsOpen && (
            <div className="setting-checkbox-container">
              <label for="is-showing-shedule">Show Schedule</label>
              <input
                type="checkbox"
                id="is-showing-shedule"
                value={isShowingSchedule}
                onClick={() => this.setState({
                  isShowingSchedule: !isShowingSchedule
                })}
              />
            </div>
          )}
          <i className="fas fa-cog" onClick={() => this.setState({ isSettingsOpen: !isSettingsOpen })}></i>
        </header>
        <section className="section section-one">
          <Clock />
          {isShowingSchedule && <Schedule />}
        </section>
        <section className="section section-two">
          <TodoList />
        </section>
      </div>
    );
  }
}



export default App;
