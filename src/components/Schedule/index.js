import React, { Component } from 'react';
import moment from "moment";

import { GOOGLE_API_KEY } from '../../config.js';
import './style.css';

class Schedule extends Component{
  constructor(props) {
    super(props)
    this.state = {
      events: [],
      loggedIn: null,
      calendarId: "",
    }
  }

  getEvents() {
    let that = this;
    let maxEvents = 5;
    const gapi = window.gapi;
    function start() {
      gapi.client.init({
        'apiKey': GOOGLE_API_KEY
      }).then(function() {
        return gapi.client.request({
          'path': `https://www.googleapis.com/calendar/v3/calendars/${that.state.calendarId}/events?maxResults=${maxEvents}&orderBy=updated&timeMin=${moment().toISOString()}&timeMax=${moment()
          .endOf("day")
          .toISOString()}`,
        })
      }).then( (response) => {
        let events = response.result.items;
        that.setState({ events });
      }, (err) => {
        console.log(err);
      });
    }
    gapi.load('client', start);
  }

  onCalendarIdInputChange(e) {
    console.log(e.target.value);
    this.setState({ calendarId: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.setState({ loggedIn: true });
    this.getEvents();
  }

  render() {
    if (this.state.loggedIn) {
      return (
        <div className="schedule">
          {this.state.events.length > 0 ? (
            <h2 className="schedule-heading">Upcoming meetings</h2>
            ) : (
            <h2 className="schedule-heading no-upcoming">No Upcoming meetings</h2>
          )}
          {this.state.events.length > 0 && this.state.events.map((event, i) => (
            <p key={i}>{event.summary} at {moment(event.start.dateTime).format('HH:mm')}</p>
          ))}
        </div>
      );
    } else {
      return (
        <form onSubmit={(e) => this.onFormSubmit(e)} className="schedule">
          <input
            type="text"
            name="calendarId"
            onChange={(e) => this.onCalendarIdInputChange(e)}
            value={this.state.calendarId}
            placeholder="Google Calendar ID"
            className="calendar-id-input"
          />
          <button className="calendar-submit" type="submit">Submit</button>
        </form>
      );
    }
  }
}

export default Schedule;