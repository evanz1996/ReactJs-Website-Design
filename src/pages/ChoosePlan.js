import React, { Component } from "react";
import styled from "styled-components";
import monero from "../images/monero.png";
import { Link, NavLink } from "react-router-dom";
import check from "../images/watch/check.png";
import FooterChoosePlan from "../components/chooseplan/FooterChoosePlan";

class ChoosePlan extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <MainContainer>
        <div className="header-top">
          <Link to="/">
            <Logo src={monero} alt="logo"></Logo>
          </Link>
          <NavLink to="/login" className="btn signIn-btn">
            Sign In
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
            <div className="bullet">
              Everything on Theater for one low price
            </div>
            <div className="bullet">Unlimited viewing on all your devices</div>
          </div>
          <Button> See the plans</Button>
        </div>
        <FooterChoosePlan />
      </MainContainer>
    );
  }
}

export default ChoosePlan;

//Main Container

const MainContainer = styled.div`
  background: #ffff;

  //header top
  .header-top {
    background: #ffff;
    height: 7rem;
    border-bottom: 1px solid #e6e6e6;
  }

  //header-content
  .header-content {
    display: grid;
    justify-content: center;
    background: #fff;
    color: var(--main-dark);
    margin-bottom: 1rem;
    width: 65%;
    position: relative;
    margin: auto;
    margin-top: 1rem;
    text-align: center;
    align-content: center;
    flex-derection: columns;
    z-index: 2;
  }
  .header-content img {
    margin: 2.35rem auto 1.875rem;
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
     border-bottom: 5px solid #ff5722;
     border-left: 5px solid #ff5722;
     transform: rotate(-45deg)
 }

 //Checkmark Logo
.checkmark-logo{
  width: 3rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
}

// the signIn button
.signIn-btn{
  margin: 15625rem 3% 0;
  padding: 0.4375rem 1.0625rem;
  font-weight: 700;
  line-height: normal;
  color: black;
  font-size: 1.s;
  right: -88%;
  top: 50%;
  position: relative;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
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

const Button = styled.button`
.button
display: inline-block;
background: #db3e00;
text-transform: uppercase;
border: none;
outline: none;
margin: ${props => (props.primary ? "0 15%" : "0")};
padding:${props => (props.primary ? "0.5rem" : "0.8rem 1.3rem")}
border-radius: 0.1875rem;
font-size: ${props => (props.primary ? "2rem" : "1rem")};
text-align: center;
box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
transition: background0.2s ease-in;
cursor: pointer;
&:hover {
  background: #ff9800;
}
`;
