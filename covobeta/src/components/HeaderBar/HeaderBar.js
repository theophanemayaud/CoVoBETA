import React, { Component } from "react";
import logo from "./../../logo.png";
import "./HeaderBar.css";

class HeaderBar extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to CoVo</h1>
      </header>
    );
  }
}

export default HeaderBar;
