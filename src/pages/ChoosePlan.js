import React from "react";
import styled from "styled-components";
import monero from "../images/monero.png";
import { Link, NavLink } from "react-router-dom";
import { check } from "react-icons-kit/iconic/check";
import { Button } from "../components/Button.js/Button";

const ChoosePlan = () => {
  return (
    <MainContainer>
      <div className="header-top">
        <Link to="/">
          <Logo src={monero} alt="logo"></Logo>
        </Link>
        <NavLink to="/login" className="btn signIn-btn">
          sign In
        </NavLink>
      </div>

      {/* header-content */}
      <div className="header-content">
        <img className="checkmark-logo" src={check} alt="checkmark-logo" />
        <p>
          Step <strong> 1</strong> of <strong> 3 </strong>
        </p>
        <h2> Choose your plan.</h2>
        <div className="checked-list">
          <div className="bullet"> No commitments, cancel anytime</div>
          <div className="bullet">Everything on Theater for one low price</div>
          <div className="bullet">Unlimited viewing on all your devices</div>
        </div>
        <Button> See the plans</Button>
      </div>
    </MainContainer>
  );
};

export default ChoosePlan;

//Main Container

const MainContainer = styled.div`
  background: #ffff;

  //header top
  .header-top {
    background: #ffff;
    height: 7rem;
    border-bottom: 1px solid #6e6e6e;
  }

  //header-content
  .header-content {
    display: grid;
    justify-content: center;
    background: #fff;
    color: var(--main-dark);
    margin-bottom: 6rem;
    width: 65%;
    position: relative;
    margin: auto;
    margin-top: 4.5rem;
    text-align: center;
    align-content: center;
    flex-derection: columns;
    z-index: 2;
  }
  .header-content img {
    margin: 6.35rem auto 1.875rem;
  }
  // checked list
  .checked-list {
   text-align: left;
   margin:1rem;
   top: 1rem auto 3rem;
   padding-left: 1.5635rem;
   width: 85%;
   font-size: 17px;
   padding: auto;
  }

 .bullet{
     margin-top:1rem;
     margin-left: 1rem;
     text-indent: -1em;
     line-height: 1.2rem;
 }
 .checked-list .bullet::before{
     color: transparent;
     display: inline-block;
     position: relative;
     height:0.3em;
     width 0.8em;
     content:"";
     left: -0.9375rem;
     bottom: 0.1875rem;
     border-bottom: 1px solid #e50914;
     border-left: 1px solid #e50914;
     transform: rotate(-45deg)
 }
`;

//Logo
const Logo = styled.img`
  width: 5rem;
  position: absolute;
  top: 50%;
  left: 5%;

  transform: translate(-50%, -50%);
`;
