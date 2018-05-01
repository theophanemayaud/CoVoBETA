import React from "react";
import { findDOMNode } from "react-dom";
import Button from "material-ui/Button";
import Popover from "material-ui/Popover";

import { ToolbarIcon } from "rmwc/Toolbar";
import SignInLogic from "./../SignInLogic";

class TestingPopover extends React.Component {
  state = {
    open: false,
    anchorEl: null
  };

  handleClickButton = () => {
    this.setState({
      open: true,
      anchorEl: findDOMNode(this.button)
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  button = null;

  render() {
    return (
      <div style={{ position: "absolute", top: "200px", right: "100px" }}>
        <Button
          ref={node => {
            this.button = node;
          }}
          variant="raised"
          onClick={this.handleClickButton}
        >
          Open Popover
        </Button>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorReference="anchorEl"
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
        >
          <div style={{ width: "250px" }}>{/*<SignInLogic/>*/}</div>
        </Popover>
      </div>
    );
  }
}

export default TestingPopover;
