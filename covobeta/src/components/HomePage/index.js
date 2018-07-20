import React, { Component } from "react";

//Installed dependencies imports
import { Button } from "rmwc/Button";
import { connect } from "react-redux";

//CoVo components imports
import { setFromAddress } from "../../actions";
import CoVoPlaceChooser from "../CoVoPlaceChooser";

//Content imports
import "./HomePage.css";

//Temporary or unclassified imports

//Beginning of implementation
class HomePage extends Component {
	handleSelect = () => {
		console.log("Place was selected on HomePage");
	};

	render() {
		return (
			<div className="covo-home-page">
				<p className="app-intro">
					Yes, this website exists but it is not yet ready !!! We are busy
					making it great, so it can help everyone out there who needs to go
					about freely. Well, but of course, who needs this, really ?
				</p>
				<Button raised className="mdc-theme--secondary-bg		">
					Default
				</Button>
				<CoVoPlaceChooser
					boxName="Departure"
					boxContent={this.props.fromAddress}
					onBoxContentChange={this.props.fromAddressChange}
					onCoVoPlaceChosen={this.handleSelect}
				/>

				<div>
					<button onClick={() => console.log(this.props)}>Log props</button>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	fromAddress: state.utils.fromAddress,
	toAddress: state.utils.toAddress
});
const mapDispatchToProps = (dispatch) => {
	return {
		fromAddressChange: (address) => {
			dispatch(setFromAddress(address));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomePage);
