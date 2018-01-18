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
              <ToolbarTitle>CoVo</ToolbarTitle>
            </ToolbarSection>

            <ToolbarSection align="end">
              <div>Dropdown </div>
              <div>Some things </div>
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
            <DrawerHeaderContent>Directions</DrawerHeaderContent>
          </DrawerHeader>
          <DrawerContent>
            <Navigation>
              <a href="#" selected>
                <Icon name="directions_bus" />Bus
              </a>
              <a href="#">
                <Icon name="directions_railway" />Railway
              </a>
              <a href="#">
                <Icon name="directions_bike" />Bike
              </a>
            </Navigation>
          </DrawerContent>
        </Drawer>
      </div>
    );
  }
}

export default CoVoToolbarAndDrawer;
