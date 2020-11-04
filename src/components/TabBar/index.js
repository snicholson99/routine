import React, { Component } from "react";

import { DEFAULT_TABS } from '../../config.js';
import "./style.css";

class TabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: localStorage.getItem("tabs") ? JSON.parse(localStorage.getItem("tabs")) : JSON.parse(DEFAULT_TABS),
      activeTab: props.activeTabIndex,
    };
  }
  
  onTabClick = (tabIndex) => {
    this.setState({ activeTab: tabIndex }, () => {
      this.props.updateActiveTabIndex(tabIndex);
    })
  }

  createTab = () => {
    const tabName = prompt("Please enter new tab name", `Tab ${this.state.tabs.length + 1}`);
    if (!!tabName) {
      this.setState(currentState => {
        const tabs = [
          ...currentState.tabs,
          { name: tabName },
        ];
        
        return {
          tabs,
        };
      }, () => {
        this.props.updateActiveTabIndex(this.state.tabs.length + 1);
        // save the tabs in local storage
        localStorage.setItem("tabs", JSON.stringify(this.state.tabs));
      });
    }
  }

  render() {
    const { onTabClick, createTab } = this;
    const { tabs, activeTab } = this.state;
    return (
      <div className="tab-bar">
        {tabs.map((tab, i) => (
          <div key={i} className={`tab ${activeTab === i ? "active" : "inactive"}`} onClick={() => onTabClick(i)}>
            {tab.name}
          </div>
        ))}
        {tabs.length < 5 && (
          <div className="tab-create" onClick={createTab}>
            <i className="fas fa-plus"></i>
          </div>
        )}
      </div>
    );
  }
}

export default TabBar;