import React from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

function Sign() {
  const [logIn, setLogIn] = React.useState(
    <LogIn handleClick={changeToSignUp} />
  );
  function changeToSignUp() {
    setLogIn((prevState) => <SignUp handleClick={changeToLogIn} />);
  }
  function changeToLogIn() {
    setLogIn((prevState) => <LogIn handleClick={changeToSignUp} />);
  }
  return <div>{logIn}</div>;
}

export default Sign;
