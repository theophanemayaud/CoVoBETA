import React, { Component } from "react";

import { ToolbarIcon } from "rmwc/Toolbar";
import "./LoginAndOtherDropdown.css";

//Stuff for popover
import Popover from "material-ui/Popover";
import { findDOMNode } from "react-dom";

import SignInLogic from "./../SignInLogic";

class LoginAndOtherDropdown extends Component {
  state = {
    menuIsOpen: false,
    anchorEl: null
  };

  handleClick = event => {
    this.setState({
      menuIsOpen: true,
      anchorEl: findDOMNode(this.button)
    });
  };
  render() {
    return (
      <div>
        <Popover
          open={this.state.menuIsOpen}
          anchorEl={this.state.anchorEl}
          anchorReference="anchorEl"
          onClose={evt => this.setState({ menuIsOpen: false })}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
        >
          <div>
            <div style={{ width: "300px" }}>
              <SignInLogic />
            </div>
          </div>
        </Popover>
        <ToolbarIcon
          strategy="ligature"
          use="more_vert"
          onClick={evt => this.setState({ menuIsOpen: !this.state.menuIsOpen })}
        />
      </div>
    );
  }
}

export default LoginAndOtherDropdown;
