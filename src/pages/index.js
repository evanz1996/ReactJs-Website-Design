import React, { Component } from "react";
import Header from "../components/Header";
import TabComponent from "../components/TabComponent";
import Footer from "../components/Footer";

class index extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Header />
        <TabComponent />
        <Footer />
      </div>
    );
  }
}

export default index;
