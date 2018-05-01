import React, { Component } from "react";

//Installed dependencies imports
import { ToolbarIcon } from "rmwc/Toolbar";
import { connect } from "react-redux";
////Stuff for popover
import Popover from "material-ui/Popover";

//CoVo javascript imports
import { toggleLoginPopover } from "./../../actions";
import SignInLogic from "./../SignInLogic";

//Content imports
import "./LoginAndOtherDropdown.css";

//Temporary or unclassified imports

//Beginning of implementation
class LoginAndOtherDropdown extends Component {
  render() {
    return (
      <div>
        <Popover
          open={this.props.loginPopoverIsOpen}
          onClose={() => this.props.toggleLoginPopover(true)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
        >
          <div>
            <div style={{ width: "300px" }}>
              <SignInLogic />
            </div>
          </div>
        </Popover>
        <ToolbarIcon
          strategy="ligature"
          use="more_vert"
          onClick={() =>
            this.props.toggleLoginPopover(this.props.loginPopoverIsOpen)
          }
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginPopoverIsOpen: state.uiState.loginPopoverIsOpen
});
const mapDispatchToProps = dispatch => {
  return {
    toggleLoginPopover: isOpen => {
      dispatch(toggleLoginPopover(isOpen));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  LoginAndOtherDropdown
);
