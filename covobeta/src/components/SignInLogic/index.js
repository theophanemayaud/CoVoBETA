import React from "react";

//Installed dependencies imports
import { connect } from "react-redux";
//// Import StyledFirebaseAuth and firebase.
import { StyledFirebaseAuth } from "react-firebaseui";
import firebase from "firebase/app";
import "firebase/auth";
import * as firebaseui from "firebaseui";
import { Button } from "rmwc/Button";

//CoVo javascript imports
import { setUserInfoAndSettings, setUserSignedState } from "./../../actions";

//Content imports

//Temporary or unclassified imports

//Beginning of implementation

//// Configure Firebase.
const config = {
  apiKey: "AIzaSyCYpY7U9OHt3KWPuUr9Bsxp7MlX4JPJ9AY",
  authDomain: "covo-io.firebaseapp.com",
  databaseURL: "https://covo-io.firebaseio.com",
  projectId: "covo-io",
  storageBucket: "covo-io.appspot.com",
  messagingSenderId: "701812569579"
};
firebase.initializeApp(config);

class SignInLogic extends React.Component {
  componentDidMount() {
    //now set stuff to get names and all

    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          // User is signed in.
          this.props.setUserInfoAndSettings(user);
        } else {
          this.signOut();
        }
      },
      function(error) {
        console.error("covo: " + error);
      }
    );
  }

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    signInSuccessUrl: "#",
    signInOptions: [
      {
        // Google provider must be enabled in Firebase Console to support one-tap
        // sign-up.
        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // Required to enable this provider in one-tap sign-up.
        authMethod: "https://accounts.google.com",
        // Required to enable ID token credentials for this provider.
        // This can be obtained from the Credentials page of the Google APIs
        // console.
        clientId:
          "866606382146-i2quruh3lpudcdoal537s6cnfaljae7s.apps.googleusercontent.com"
      },
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      {
        provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        defaultCountry: "Fr",
        recaptchaParameters: {
          type: "image", // 'audio'
          size: "compact", // 'invisible' or 'compact'
          badge: "bottomleft" //' bottomright' or 'inline' applies to invisible.
        }
      }
    ],
    // Required to enable one-tap sign-up credential helper.
    /* To enable/disable switch GOOGLE_YOLO and NONE */
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,

    // Sets the `signedIn` state property to `true` once signed in.
    callbacks: {
      signInSuccessWithAuthResult: () => {
        /*this.setState({ signedIn: true });
        localStorage.setItem(
          "signInLogicState",
          JSON.stringify({ signedIn: true })
        );*/
        this.props.setUserSignedState(true);
        return false; // Avoid redirects after sign-in.
      }
    }
  };
  signOut = () => {
    this.props.signOut();
    /*localStorage.setItem(
      "signInLogicState",
      JSON.stringify({ signedIn: false })
    );*/
  };

  render() {
    if (!this.props.signedIn) {
      return (
        <div>
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      );
    }
    return (
      <div style={{ margin: "10px", width: "95%", wordWrap: "break-word" }}>
        <img
          className="user-picture"
          border="0"
          alt={this.props.displayName}
          src={
            this.props.photoURL ||
            "https://cdn.onlinewebfonts.com/svg/img_299586.png"
          }
          style={{ width: "20px", margin: "10px" }}
        />
        {this.props.displayName} <br />
        Email : {this.props.email} <br />
        Email status : {this.props.emailVerified} <br />
        Phone number : {this.props.phoneNumber} <br />
        UID : {this.props.uid} <br />
        {/*  accessToken : {this.state.accessToken} <br />
    providerData {JSON.stringify(this.state.providerData)} <br />*/}
        <Button raised onClick={this.props.signOut}>
          Sign Out
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  signedIn: state.userInfoAndSettings.signedIn, // Local signed-in state.
  displayName: state.userInfoAndSettings.displayName,
  email: state.userInfoAndSettings.email,
  emailVerified: state.userInfoAndSettings.emailVerified,
  phoneNumber: state.userInfoAndSettings.phoneNumber,
  photoURL: state.userInfoAndSettings.photoURL,
  uid: state.userInfoAndSettings.uid,
  accessToken: state.userInfoAndSettings.accessToken
});
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => {
      var user = {
        signedIn: null,
        displayName: null,
        email: null,
        emailVerified: null,
        phoneNumber: null,
        photoURL: null,
        uid: null,
        accessToken: null
      };
      dispatch(setUserInfoAndSettings(user));
    },
    setUserSignedState: (isSignedIn) => {
      dispatch(setUserSignedState(isSignedIn));
    },
    setUserInfoAndSettings: (user) => {
      var newUser = {
        displayName: user.displayName,
        email: user.email,
        emailVerified: user.emailVerified,
        phoneNumber: user.phoneNumber,
        photoURL: user.photoURL,
        uid: user.uid,
        accessToken: user.accessToken
      };
      dispatch(setUserInfoAndSettings(newUser));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInLogic);
