// Import FirebaseAuth and firebase.
import React from "react";
import { FirebaseAuth } from "react-firebaseui";
import firebase from "firebase";

// Configure Firebase.
const config = {
  apiKey: "AIzaSyAeue-AsYu76MMQlTOM-KlbYBlusW9c1FM",
  authDomain: "myproject-1234.firebaseapp.com"
  // ...
};
firebase.initializeApp(config);

export default class SignInLogic extends React.Component {
  state = {
    signedIn: false // Local signed-in state.
  };

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    // Sets the `signedIn` state property to `true` once signed in.
    callbacks: {
      signInSuccess: () => {
        this.setState({ signedIn: true });
        return false; // Avoid redirects after sign-in.
      }
    }
  };

  render() {
    if (!this.state.signedIn) {
      return (
        <div>
          <p>Please sign-in:</p>
          <FirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      );
    }
    return (
      <div>
        <p>You are now signed-in!</p>
      </div>
    );
  }
}
