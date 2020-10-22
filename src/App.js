import React, { Component } from 'react';

import './App.css';

import Settings from './components/Settings';
import Clock from './components/Clock';
import Schedule from './components/Schedule';
import TodoList from './components/TodoList';
import Notes from './components/Notes';


class App extends Component {
  constructor() {
    super();
    this.state = {
      isSettingsOpen: false,
      isShowingSchedule: false,
      // isShowingClock: true,
    }
  }
  render() {

    const onSettingsCogClick = () => {
      this.setState({ isSettingsOpen: !isSettingsOpen });
    }
    
    const onSettingsShowSheduleClick = () => {
      this.setState({ isShowingSchedule: !isShowingSchedule });
    }
    
    // const onSettingsShowClockClick = () => {
    //   this.setState({ isShowingClock: !isShowingClock });
    // }

    const { isSettingsOpen, isShowingSchedule } = this.state;
    return (
      <div className="App">
        {/* <header className={!isShowingSchedule && !isShowingClock && "hover-to-show"}> */}
        <header>
          <Settings
            isSettingsOpen={isSettingsOpen}
            onSettingsCogClick={onSettingsCogClick}
            isShowingSchedule={isShowingSchedule}
            onSettingsShowSheduleClick={onSettingsShowSheduleClick}
            // isShowingClock={isShowingClock}
            // onSettingsShowClockClick={onSettingsShowClockClick}
          />
          {/* {isShowingClock && <Clock />} */}
          <Clock />
          {isShowingSchedule && <Schedule />}
        </header>
        <section className="section section-one">
          <Notes />
        </section>
        <section className="section section-two">
          <TodoList />
        </section>
      </div>
    );
  }
}



export default App;
