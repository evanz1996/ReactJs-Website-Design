import React, { Component } from "react";
import monero from "../images/monero.png";
import styled from "styled-components";
import LoginForm from "../components/login/LoginForm";
import LoginFooter from "../components/login/LoginFooter";
import { Link } from "react-router-dom";
class login extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="main-login-container">
        <div className="header-top">
          <Link to="/">
            <Logo src={monero} alt="logo" />
          </Link>
        </div>
        <LoginForm />
        <LoginFooter />
      </div>
    );
  }
}

export default login;

//Logo
const Logo = styled.img`
  width: 5rem;
  position: absolute;
  top: 20%;
  left: 5%;
  transform: translate(-50%, -50%);
  margin-left: 0;
`;
