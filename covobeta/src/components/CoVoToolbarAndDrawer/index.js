import React, { Component } from "react";

import {
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarIcon,
  ToolbarFixedAdjust
} from "rmwc/Toolbar";
import { SimpleMenu, MenuItem, MenuAnchor } from "rmwc/Menu";

import CoVoDrawer from "./../CoVoDrawer";
import LoginAndOtherDropdown from "./../LoginAndOtherDropdown";
import "./CoVoToolbarAndDrawer.css";

class CoVoToolbarAndDrawer extends Component {
  state = {
    drawerIsOpen: false,
    menuIsOpen: false
  };
  changeDrawerState = () => {
    this.setState({ drawerIsOpen: false });
  };

  render() {
    return (
      <div className="covo-toolbar-and-drawer">
        <Toolbar fixed>
          <ToolbarRow>
            <ToolbarSection alignStart>
              <ToolbarIcon
                strategy="ligature"
                use="menu"
                onClick={() => {
                  this.setState({ drawerIsOpen: !this.state.drawerIsOpen });
                }}
              />
            </ToolbarSection>
            <ToolbarSection>
              <a
                className="no-decoration-link"
                href="/"
                style={{ textDecoration: "none" }}
              >
                <img
                  className="toolbar-covo-logo"
                  border="0"
                  alt="CoVoLogo"
                  src={"images/logo.png"}
                />
              </a>
            </ToolbarSection>

            <ToolbarSection alignEnd>
              <MenuAnchor>
                <SimpleMenu
                  open={this.state.menuIsOpen}
                  onClose={() => this.setState({ menuIsOpen: false })}
                >
                  <MenuItem>Not</MenuItem>
                  <MenuItem>Yet</MenuItem>
                  <MenuItem>In</MenuItem>
                  <MenuItem>Working</MenuItem>
                  <MenuItem>State</MenuItem>
                </SimpleMenu>

                <ToolbarIcon
                  strategy="ligature"
                  onClick={() =>
                    this.setState({ menuIsOpen: !this.state.menuIsOpen })
                  }
                >
                  language
                </ToolbarIcon>
              </MenuAnchor>
              <LoginAndOtherDropdown />
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>
        <ToolbarFixedAdjust />
        <CoVoDrawer
          drawerState={this.state.drawerIsOpen}
          onDrawerClose={this.changeDrawerState}
        />
      </div>
    );
  }
}

export default CoVoToolbarAndDrawer;
