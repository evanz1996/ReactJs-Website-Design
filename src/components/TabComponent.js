import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TabBook from "./tabs_nav/TabBook";
import TabDevices from "./tabs_nav/TabDevices";
import TabPrices from "./tabs_nav/TabPrices";
import "../css/TabsNav.css";
//Tab Components
import TabContent1 from "./TabContent1";
import TabContent2 from "./TabContent2";
import TabContent3 from "./TabContent3";
class TabComponent extends Component {
  state = {
    tabIndex: 0
  };
  render() {
    return (
      <div>
        <Tabs
          className="tabs"
          selectedIndex={this.state.tabIndex}
          onSelect={tabIndex => this.setState({ tabIndex })}
        >
          <TabList className="tab-nav-container">
            <Tab
              className={`${
                this.state.tabIndex === 0 ? " tab-selected  active" : null
              }`}
            >
              <TabBook />
              <p>
                <strong>
                  No commitments <br /> Cancel online anytime
                </strong>
              </p>
            </Tab>
            <Tab
              className={`${
                this.state.tabIndex === 1 ? "tab-selected active" : null
              }`}
            >
              <TabDevices />
              <p>
                <strong> Watch anywhere</strong>
              </p>
            </Tab>
            <Tab
              className={`${
                this.state.tabIndex === 2 ? "tab-selected active" : null
              }`}
            >
              <TabPrices />
              <p>
                <strong> Pick your price</strong>
              </p>
            </Tab>
          </TabList>
          {/* Tabs Content */}
          <TabPanel>
            <TabContent1 />
          </TabPanel>
          <TabPanel>
            <TabContent2 />
          </TabPanel>
          <TabPanel>
            <TabContent3 />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default TabComponent;
