import React, { useRef, useState } from "react";
import "./register.scss";
import logo from "../../Assest/images/netflixs-removebg-preview.png";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img src={logo} className="logo" alt="" />
          <button className="loginButton">Sign In </button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime</h2>
        <p>
          Ready to watch? Enter your email to create or restart you membership.
        </p>
        {!email ? (
          <div className="input">
            <input
              type="email"
              placeholder="email address"
              name=""
              id=""
              ref={emailRef}
            />
            <button onClick={handleStart} className="registerButton">
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input
              type="password"
              placeholder="Enter Your Password"
              name=""
              id=""
              ref={passwordRef}
            />
            <button onClick={handleFinish} className="registerButton">
            Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
