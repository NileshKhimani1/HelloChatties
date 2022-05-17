import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, provider } from "./firebase";
import firebase from "firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import icon1 from "./hello.png";

function Login() {
  const [{}, dispatch] = useStateValue();
  React.useEffect(
    () =>
      auth.onAuthStateChanged((user) => {
        if (user) {
          dispatch({
            type: actionTypes.SET_USER,
            user: user,
          });
        }
      }),
    [dispatch]
  );
  const signIn = () => {
    auth.signInWithPopup(provider).then(() => console.log("logging in"));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src={icon1} alt="HelloChatties" />
        <div className="login__text">
          <h1>Sign in to HelloChatties</h1>
        </div>
        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  );
}

export default Login;
