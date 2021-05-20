import React, { useContext } from "react";
import firebase from "firebase/app";
import "./Login.css";

import "firebase/auth";
import firebaseConfig from "../../../firebase.config";
import { UserContext } from "../../../App";
import { useHistory, useLocation } from "react-router-dom";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || {
    from: { pathname: "/dashboard/booking" },
  };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        storeAuthToken();
      })
      .catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
        history.replace(from);
      })
      .catch(function (error) {
        // Handle error
      });
  };
  return (
    <div>
      <div class="g-sign-in-button">
        <div class="content-wrapper">
          <div class="logo-wrapper">
            <img src="https://developers.google.com/identity/images/g-logo.png" />
          </div>
          <span class="text-container">
            <button className="btn btn-brand" onClick={handleGoogleSignIn}>
              Google Sign in
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
