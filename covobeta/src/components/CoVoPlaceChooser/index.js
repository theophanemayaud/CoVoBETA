import React, { Component } from "react";

//Installed dependencies imports
import PropTypes from "prop-types";
//import { connect } from "react-redux";
import { TextField } from "rmwc/TextField";

//CoVo javascript imports

//Content imports
import "./CoVoPlaceChooser.css";

//Temporary or unclassified imports

//Descriptions of props, what it does, and what it affects
/*General description :
* Props :
 ** boxName : name of the textbox
 ** boxContent : text in the boxName
 ** boxContentChange : function to call when there is some new text
 ** onCoVoPlaceChosen : function to call to set the covoPlace
* Needs to read from store :
* Store actions needed :
* Affects
 ** return: ...
 ** ...
 **/
//Beginning of implementation
class CoVoPlaceChooser extends Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };
  render() {
    return (
      <TextField
        outlined
        value={this.props.boxContent}
        onChange={this.props.boxContentChange}
        label={this.props.boxName}
      />
    );
  }
}

/*const mapStateToProps = state => ({
  exampleProp: state.exampleStatePart
});

const mapDispatchToProps = dispatch => {
  return {
    examplePropFunction: () => {
      dispatch(exampleStoreAction(false));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoVoPlaceChooser);*/
export default CoVoPlaceChooser;
