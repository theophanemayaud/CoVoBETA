import React, { Component } from "react";

import { SimpleMenu, MenuItem, MenuAnchor } from "rmwc/Menu";
import { ToolbarIcon } from "rmwc/Toolbar";
import IconButton from "./../IconButton";
import "./LoginAndOtherDropdown.css";

class LoginAndOtherDropdown extends Component {
  state = {
    menuIsOpen: false
  };
  render() {
    return (
      <MenuAnchor>
        <SimpleMenu
          open={this.state.menuIsOpen}
          onClose={evt => this.setState({ menuIsOpen: false })}
        >
          <MenuItem>Cookies</MenuItem>
          <MenuItem>Pizza</MenuItem>
          <MenuItem>Icecream</MenuItem>
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
