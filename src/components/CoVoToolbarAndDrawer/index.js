import React, { Component } from "react";

//Installed dependencies imports
import {
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarIcon,
  ToolbarFixedAdjust
} from "rmwc/Toolbar";
import { Menu, MenuItem, MenuAnchor } from "rmwc/Menu";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//CoVo components imports
import CoVoDrawer from "./../CoVoDrawer";
import LoginAndOtherDropdown from "./../LoginAndOtherDropdown";
import { toggleDrawerState, toggleLangMenu } from "../../actions";

//Content imports
import "./CoVoToolbarAndDrawer.css";
import logo from "../../logo.png";

//Temporary or unclassified imports

//Beginning of implementation
class CoVoToolbarAndDrawer extends Component {
  render() {
    return (
      <div id="covo-toolbar-and-drawer">
        <Toolbar fixed>
          <ToolbarRow>
            <ToolbarSection alignStart>
              <ToolbarIcon
                strategy="ligature"
                use="menu"
                onClick={() => {
                  this.props.toggleDrawer(this.props.drawerIsOpen);
                }}
              />
            </ToolbarSection>
            <ToolbarSection>
              <Link
                className="no-decoration-link"
                to="/"
                style={{ textDecoration: "none" }}
              >
                <img
                  id="toolbar-covo-logo"
                  border="0"
                  alt="CoVoLogo"
                  src={logo}
                />
              </Link>
            </ToolbarSection>

            <ToolbarSection alignEnd>
              <MenuAnchor>
                <Menu
                  open={this.props.langMenuIsOpen}
                  onClose={() => {
                    this.props.toggleLang(true);
                  }}
                >
                  <MenuItem>Not</MenuItem>
                  <MenuItem>Yet</MenuItem>
                  <MenuItem>In</MenuItem>
                  <MenuItem>Working</MenuItem>
                  <MenuItem>State</MenuItem>
                </Menu>

                <ToolbarIcon
                  strategy="ligature"
                  onClick={() =>
                    this.props.toggleLang(this.props.langMenuIsOpen)
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
          drawerState={this.props.drawerIsOpen}
          onDrawerClose={() => {
            this.props.toggleDrawer(true);
          }}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  drawerIsOpen: state.uiState.drawerIsOpen,
  langMenuIsOpen: state.uiState.langMenuIsOpen
});
const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawer: (isOpen) => {
      dispatch(toggleDrawerState(isOpen));
    },
    toggleLang: (isOpen) => {
      dispatch(toggleLangMenu(isOpen));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoVoToolbarAndDrawer);
