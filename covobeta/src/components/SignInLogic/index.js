// Import FirebaseAuth and firebase.
import React from "react";
import { FirebaseAuth } from "react-firebaseui";
import firebase from "firebase";
import firebaseui from "firebaseui";
import { Button } from "rmwc/Button";

// Configure Firebase.
const config = {
  apiKey: "AIzaSyCYpY7U9OHt3KWPuUr9Bsxp7MlX4JPJ9AY",
  authDomain: "covo-io.firebaseapp.com",
  databaseURL: "https://covo-io.firebaseio.com",
  projectId: "covo-io",
  storageBucket: "covo-io.appspot.com",
  messagingSenderId: "701812569579"
};
firebase.initializeApp(config);

export default class SignInLogic extends React.Component {
  state = {
    signedIn: false, // Local signed-in state.
    displayName: null,
    email: null,
    emailVerified: null,
    phoneNumber: null,
    photoURL: null,
    uid: null,
    accessToken: null,
    providerData: null
  };
  componentDidMount() {
    var tempsignInLogicState = JSON.parse(
      localStorage.getItem("signInLogicState") || "{}"
    );

    this.setState(tempsignInLogicState);

    //now set stuff to get names and all

    firebase.auth().onAuthStateChanged(
      user => {
        if (user) {
          // User is signed in.
          user.getIdToken().then(accessToken => {
            this.setState({
              displayName: user.displayName,
              email: user.email,
              emailVerified: user.emailVerified,
              phoneNumber: user.phoneNumber,
              photoURL: user.photoURL,
              uid: user.uid,
              accessToken: accessToken,
              providerData: user.providerData
            });
          });
        }
      },
      function(error) {
        console.log(error);
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
      <div style={{ margin: "10px", width: "95%", wordWrap: "break-word" }}>
        <img
          className="user-picture"
          border="0"
          alt={this.state.displayName}
          src={
            this.state.photoURL ||
            "https://cdn.onlinewebfonts.com/svg/img_299586.png"
          }
          style={{ width: "20px", margin: "10px" }}
        />
        {this.state.displayName} <br />
        Email : {this.state.email} <br />
        Email status : {this.state.emailVerified} <br />
        Phone number : {this.state.phoneNumber} <br />
        UID : {this.state.uid} <br />
        {/*  accessToken : {this.state.accessToken} <br />
    providerData {JSON.stringify(this.state.providerData)} <br />*/}
        <Button raised onClick={this.signOut}>
          Sign Out
        </Button>
      </div>
    );
  }
}
