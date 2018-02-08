import React, { Component } from "react";

import { SimpleMenu, MenuItem, MenuAnchor } from "rmwc/Menu";
import { ToolbarIcon } from "rmwc/Toolbar";
import IconButton from "./../IconButton";
import "./LoginAndOtherDropdown.css";

import SignInLogic from "./../SignInLogic";

class LoginAndOtherDropdown extends Component {
  state = {
    menuIsOpen: false
  };

  handleClick = event => {
    this.setState({
      menuIsOpen: true
    });
  };
  render() {
    return (
      <MenuAnchor>
        <SimpleMenu
          open={this.state.menuIsOpen}
          onClose={evt => this.setState({ menuIsOpen: false })}
        >
          {/*<SignInLogic />*/}
        </SimpleMenu>

        <ToolbarIcon
          strategy="ligature"
          use="more_vert"
          onClick={evt => this.setState({ menuIsOpen: !this.state.menuIsOpen })}
        />
      </MenuAnchor>
    );
  }
}

export default LoginAndOtherDropdown;
