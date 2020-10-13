import React from 'react';
import './App.css';

import Clock from './components/Clock';
import Schedule from './components/Schedule';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className="App">
      <section className="section section-one">
        <Clock />
        <Schedule />
      </section>
      <section className="section section-two">
        <TodoList />
      </section>
    </div>
  );
}



export default App;
