import React, { Component } from "react";

import {
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
  ToolbarMenuIcon,
  ToolbarIcon,
  ToolbarFixedAdjust
} from "rmwc/Toolbar";
import { Icon } from "rmwc/Icon";
import { Drawer, DrawerHeader, DrawerContent } from "rmwc/Drawer";
import { ListItem, ListItemText } from "rmwc/List";

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
            <ToolbarSection alignStart>
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

            <ToolbarSection alignEnd>
              <Icon name="language" />
              <Icon name="perm_identity" />
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>
        <ToolbarFixedAdjust />
        <Drawer
          temporary
          open={this.state.isOpen}
          onClose={() => {
            this.setState({ isOpen: false });
          }}
        >
          <DrawerHeader>CoVo</DrawerHeader>
          <DrawerContent>
            <ListItem>
              <ListItemText>
                <a href="#" selected>
                  <Icon name="stars" />Empty demo
                </a>
              </ListItemText>
              <ListItemText>
                <a href="#">
                  <Icon name="start_rate" />N2
                </a>
              </ListItemText>
              <ListItemText>
                <a href="#">
                  <Icon name="star_half" />N3
                </a>
              </ListItemText>
              <ListItemText>
                <a href="#">
                  <Icon name="start_border" />N4
                </a>
              </ListItemText>
            </ListItem>
          </DrawerContent>
        </Drawer>
      </div>
    );
  }
}

export default CoVoToolbarAndDrawer;
