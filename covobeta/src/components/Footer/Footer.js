import React, { Component } from "react";
import data from "./../../timestamp.json";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div>
        <div align="center">
          <a href="/">
            <div className="homepage-link">CoVo 0.1.0 </div>
            <div id="footer-timestamp">build at {data.latest}</div>
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
