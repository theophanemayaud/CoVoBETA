import React, { Component } from "react";

//Installed dependencies imports

//CoVo components imports
import { Link } from "react-router-dom";

//Content imports
import data from "./../../timestamp.json";
import "./Footer.css";

//Temporary or unclassified imports

//Beginning of implementation
class Footer extends Component {
  render() {
    return (
      <div id="covo-footer">
        <div align="center">
          <Link to="/">
            <div className="homepage-link">CoVo 0.1.0 </div>
          </Link>
          <Link to="/test">
            <div id="footer-timestamp">build at {data.latest}</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Footer;
