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
import { SimpleMenu, MenuItem, MenuAnchor } from "rmwc/Menu";
import { Icon } from "rmwc/Icon";
import { Drawer, DrawerHeader, DrawerContent } from "rmwc/Drawer";
import { ListItem, ListItemText } from "rmwc/List";

import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";

import "./CoVoToolbarAndDrawer.css";

class CoVoToolbarAndDrawer extends Component {
  state = {
    isOpen: false,
    menuIsOpen: false
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
              <a
                className="no-decoration-link"
                href="#"
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
              <ToolbarIcon strategy="ligature">perm_identity</ToolbarIcon>
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
                <a href="#" selected /> N1
                <Icon strategy="ligature">stars</Icon>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Pizza</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Icecream</ListItemText>
            </ListItem>
          </DrawerContent>
        </Drawer>
        {/*            <ListItem>
              <ListItemText>

              </ListItemText>
              <ListItemText>
                <a href="#">
                  <Icon strategy="ligature">start_rate</Icon>
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
        </Drawer>*/}
      </div>
    );
  }
}

export default CoVoToolbarAndDrawer;
