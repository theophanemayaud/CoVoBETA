import React, { Component } from "react";

import {
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
  Drawer,
  DrawerHeader,
  DrawerHeaderContent,
  DrawerContent,
  Navigation,
  Icon
} from "react-mdc-web/lib";

import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";

import "./CoVoToolbarAndDrawer.css";

class CoVoToolbarAndDrawer extends Component {
  state = {
    isOpen: false
  };
  render() {
    return (
      <div className="covo-toolbar-and-drawer">
        <Toolbar fixed>
          <ToolbarRow>
            <ToolbarSection align="start">
              <IconButton color="contrast" aria-label="Menu">
                <MenuIcon
                  onClick={() => {
                    this.setState({ isOpen: !this.state.isOpen });
                  }}
                />
              </IconButton>
            </ToolbarSection>

            <ToolbarSection>
              <ToolbarTitle className="mdc-theme--secondary-dark">
                CoVo
              </ToolbarTitle>
            </ToolbarSection>

            <ToolbarSection align="end">
              <Icon name="language" />
              <Icon name="perm_identity" />
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>;
        <Drawer
          open={this.state.isOpen}
          onClose={() => {
            this.setState({ isOpen: false });
          }}
        >
          <DrawerHeader>
            <DrawerHeaderContent>CoVo</DrawerHeaderContent>
          </DrawerHeader>
          <DrawerContent>
            <Navigation>
              <a href="#" selected>
                <Icon name="stars" />Empty demo
              </a>
              <a href="#">
                <Icon name="start_rate" />N2
              </a>
              <a href="#">
                <Icon name="star_half" />N3
              </a>
              <a href="#">
                <Icon name="start_border" />N4
              </a>
            </Navigation>
          </DrawerContent>
        </Drawer>
      </div>
    );
  }
}

export default CoVoToolbarAndDrawer;
