// Import FirebaseAuth and firebase.
import React from "react";
import { FirebaseAuth } from "react-firebaseui";
import firebase from "firebase";
import firebaseui from "firebaseui";
import { Button } from "rmwc/Button";

// Configure Firebase.
const config = {
  apiKey: "AIzaSyBhsbQQtqfo-oV62KsU1M-idl1z_gAgS1A",
  authDomain: "covo-firebase.firebaseapp.com",
  databaseURL: "https://covo-firebase.firebaseio.com",
  projectId: "covo-firebase",
  storageBucket: "covo-firebase.appspot.com",
  messagingSenderId: "866606382146"
};
firebase.initializeApp(config);

export default class SignInLogic extends React.Component {
  state = {
    signedIn: false, // Local signed-in state.
    userName: null
  };
  componentDidMount() {
    console.log(
      "In componentDidMount before localStorage init, this.state: " +
        JSON.stringify(this.state)
    );
    var tempsignInLogicState = JSON.parse(
      localStorage.getItem("signInLogicState") || "{}"
    );
    console.log(
      "In componentDidMount tempsignInLogicState=" +
        JSON.stringify(tempsignInLogicState)
    );
    this.setState(tempsignInLogicState);
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
    /* Disabled untill production credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,*/
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,

    // Sets the `signedIn` state property to `true` once signed in.
    callbacks: {
      signInSuccess: () => {
        this.setState({ signedIn: true });
        localStorage.setItem(
          "signInLogicState",
          JSON.stringify({ signedIn: true })
        );
        console.log(
          "signInSuccess callback, localStorage signInLogicState: " +
            JSON.stringify(
              JSON.parse(localStorage.getItem("signInLogicState") || "{}")
            )
        );
        return false; // Avoid redirects after sign-in.
      }
    }
  };
  signOut = () => {
    this.setState({ signedIn: false });
    localStorage.setItem(
      "signInLogicState",
      JSON.stringify({ signedIn: false })
    );
    console.log(
      "Signed out!!! with localStorage state being : " +
        JSON.stringify(
          JSON.parse(localStorage.getItem("signInLogicState") || "{}")
        )
    );
  };

  render() {
    if (!this.state.signedIn) {
      return (
        <div>
          <FirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      );
    }
    return (
      <div style={{ margin: "10px" }}>
        <p>You are now signed-in!</p>
        <Button raised onClick={this.signOut}>
          Sign Out
        </Button>
      </div>
    );
  }
}
