import React from 'react';
import './style.css';

const Settings = (props) => {
  return (
    <div className="settings">
      <i className="settings-icon fas fa-cog" onClick={() => props.onSettingsCogClick()}></i>
      {props.isSettingsOpen && (
        <>
          <div className="settings-checkbox-container">
            <input
              type="checkbox"
              id="is-showing-shedule"
              value={props.isShowingSchedule}
              onClick={() => props.onSettingsShowSheduleClick()}
            />
            <label htmlFor="is-showing-shedule">Show Schedule</label>
          </div>
          {/* <div className="settings-checkbox-container">
            <input
              type="checkbox"
              id="is-showing-clock"
              value={props.isShowingClock}
              onClick={() => props.onSettingsShowClockClick()}
            />
            <label htmlFor="is-showing-clock">Show Clock</label>
          </div> */}
        </>
      )}
    </div>
  );
}

export default Settings;