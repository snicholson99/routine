import React, { Component } from 'react';

import './App.css';

import Settings from './components/Settings';
import Clock from './components/Clock';
import Schedule from './components/Schedule';
import TabBar from './components/TabBar';
import TodoList from './components/TodoList';
import Notes from './components/Notes';


class App extends Component {
  constructor() {
    super();
    this.state = {
      activeTabIndex: 0,
      notesList: localStorage.getItem("notesList") ? JSON.parse(localStorage.getItem("notesList")) : [],
      todoListItems: localStorage.getItem("todoListItems") ? JSON.parse(localStorage.getItem("todoListItems")) : [],
      isSettingsOpen: false,
      isShowingSchedule: false,
    }
  }
  render() {

    const onSettingsCogClick = () => {
      this.setState({ isSettingsOpen: !isSettingsOpen });
    }
    
    const onSettingsShowSheduleClick = () => {
      this.setState({ isShowingSchedule: !isShowingSchedule });
    }
    
    const updateActiveTabIndex = (activeTabIndex) => {
      this.setState({ activeTabIndex }, () => {
        console.log(this.state.activeTabIndex);
      });
    }

    const onNotesChange = (value) => {
      this.setState(currentState => {
        let notesList = currentState.notesList;
        notesList[this.state.activeTabIndex] = value;
        console.log(notesList)
        return {
          notesList,
        };
      }, () => {
        // update notes in local storage
        localStorage.setItem("notesList", JSON.stringify(this.state.notesList));
      })
    };

    const { isSettingsOpen, isShowingSchedule, activeTabIndex, notesList } = this.state;
    return (
      <div className="App">
        <header>
          <Settings
            isSettingsOpen={isSettingsOpen}
            onSettingsCogClick={onSettingsCogClick}
            isShowingSchedule={isShowingSchedule}
            onSettingsShowSheduleClick={onSettingsShowSheduleClick}
          />
          <Clock />
          {isShowingSchedule && <Schedule />}
          <TabBar
            activeTabIndex={activeTabIndex}
            updateActiveTabIndex={updateActiveTabIndex}
          />
        </header>
        <section className="section section-one">
          <Notes
            notes={notesList[activeTabIndex] ? notesList[activeTabIndex] : ""}
            onNotesChange={onNotesChange}
          />
        </section>
        <section className="section section-two">
          <TodoList />
        </section>
      </div>
    );
  }
}



export default App;
