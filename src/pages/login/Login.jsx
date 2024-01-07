import React, { useRef, useState } from "react";
import "./login.scss";
import logo from "../../Assest/images/netflixs-removebg-preview.png";

const Login = () => {
 
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img src={logo} className="logo" alt="" />
          <button className="loginButton">Sign In </button>
        </div>
      </div>
        <div className="container">
          <form action="">
            <h1>Sign In</h1>
            <input type="email" placeholder="Email or Phone number"/>
            <input type="password" placeholder="password"/>
            <button className="loginButton">Sign In</button>
            <span>New to Netflix? <b>Sign Up Now.</b></span>
            <small>
              This page is protected by google reCAPTCHA to ensure you're not a bot. <b>Learn more</b>.
            </small>
          </form>
        </div>
    </div>
  );
};

export default Login;
