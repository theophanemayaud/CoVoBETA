import React, { Component } from "react";

import {
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  IconButton,
  MenuIcon,
  ToolbarTitle
} from "react-mdc-web/lib";

import "./CoVoToolbar.css";

class CoVoToolbar extends Component {
  render() {
    return (
      <div className="covo-toolbar">
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
      </div>
    );
  }
}

export default CoVoToolbar;
