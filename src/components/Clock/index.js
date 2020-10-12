import React, { Component } from 'react';

import './style.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().getHours() + ":" + new Date().getMinutes(),
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    const today = new Date();
    this.setState({
      time: today.getHours() + ":" + today.getMinutes()
    });
  }
  render() {
    const { time } = this.state;
    return (
      <p className="App-clock">
        {time}
      </p>
    );
  }
}

export default Clock;