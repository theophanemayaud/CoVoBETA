import React, { Component } from "react";

//Installed dependencies imports
import { Drawer, DrawerHeader, DrawerContent } from "rmwc/Drawer";
import { ListItem, ListItemText } from "rmwc/List";
import { Icon } from "rmwc/Icon";
import { Link } from "react-router-dom";

//CoVo components imports

//Content imports
import "./CoVoDrawer.css";

//Temporary or unclassified imports

//Beginning of implementation
class CoVoDrawer extends Component {
  render() {
    return (
      <Drawer
        temporary
        open={this.props.drawerState}
        onClose={this.props.onDrawerClose}
      >
        <DrawerHeader>CoVo</DrawerHeader>
        <DrawerContent>
          <ListItem>
            <ListItemText>
              <Link to="/" onClick={this.props.onDrawerClose}>
                Home
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Link to="/forum" onClick={this.props.onDrawerClose}>
                Forum
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Icecream</ListItemText>
          </ListItem>
        </DrawerContent>
      </Drawer>
    );
  }
}

export default CoVoDrawer;
