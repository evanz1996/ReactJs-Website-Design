import React, { Component } from "react";
import monero from "../images/monero.png";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { ic_chevron_right } from "react-icons-kit/md/ic_chevron_right";
import { Button } from "./Button.js/Button";
//Media query
import { generateMedia } from "styled-media-query";

class Header extends Component {
  render() {
    return (
      <HeaderComponent className="header-container">
        <div className="header-top">
          <Logo src={monero} alt="logo"></Logo>
          <NavLink to="/login" className="signIn-btn">
            Sign In
          </NavLink>
        </div>

        {/*-------Header Content------ */}
        <div className="header-content">
          <Title> See what's next. </Title>
          <SubTitle> WATCH ANYWHERE. CANCEL ANYTIME</SubTitle>
          <Button to="/choose-plan" className="main-offer-btn" primary>
            try it now!
            <Icon icon={ic_chevron_right} size={37}></Icon>
          </Button>
        </div>
      </HeaderComponent>
    );
  }
}

export default Header;

const customMedia = generateMedia({
  lgDesktop: "1350px",
  mdDesktop: "1150px",
  tablet: "960px",
  smTablet: "740px",
  smPhone: "375px"
});

//Logo Container
const Logo = styled.img`
  width: 5rem;
  position: absolute;
  top: 20%;
  left: 5%;
  transform: translate(-50%, -50%);
  ${customMedia.lessThan("tablet")`left:25%;}`}
`;

//Header Container//

const HeaderComponent = styled.div`
.Icon svg{
  vertical-align: bottom !important;
  margin-left: 1.5rem;
  ${customMedia.lessThan("smTablet")`
display: none !important;`}

${customMedia.lessThan("smPhone")`
width:100%;
margin-top: -5%`}
}



.signIn-btn{
  right:0;
  background:#4d192b;
  margin:2rem 3% 0;
  padding:0.5rem ;
  font-weight: 400;
  line-height: normal;
  border-radius: 0.1875rem;
  font-size: 1rem;
  position: absolute;
  translate: transform (-50%, -50%);
  cursor: pointer;
  transition: background 0.2s ease-in;
  &:hover{
  background: var(--main-hover);
  }
  ${customMedia.lessThan("smTablet")`
  margin-top:1.5rem;
  right: 10%;`}
}

//Header Top//
.header-top{
  position: relative;
  height: 17rem;
  z-index:1;
}

//Header content//
.header-content{
  width: 50%
  position:relative;
  margin: 1rem auto 0;
  display: flex;
  justify-content: center;
  align-content: center;
  text-align:center;
  flex-direction: column;
  z-index: 1;
  ${customMedia.lessThan("smTablet")`
  display: grid;
  grid-template-rows: repeat(3,60px);
  margin-top:5rem;
  `}


}
.main-offer-btn{
${customMedia.lessThan("smTablet")`
font-size: .3rem;
margin-top: -0.5%;`}
${customMedia.lessThan("tablet")`
font-size: 2rem;
margin-bottom: -19%`}

${customMedia.lessThan("lgDesktop")`
font-size: 2rem;
margin-top: -5%`}

${customMedia.lessThan("smPhone")`
font-size: 1rem;
margin-top: -5%`}
}
`;

// Main Title
const Title = styled.h1`
  margin: 0 0 1.2rem;
  font-size: 4.5rem;
  font-weight: 500;
  line-height: 1.1rem;
  ${customMedia.lessThan("smTablet")`
 font-size: -1rem;
  margin-bottom: 9%;
  margin-top: -19%`}

  ${customMedia.lessThan("tablet")`
  font-size:3rem;
   margin-bottom: 1%;
   margin-top: 19%`}
   
  ${customMedia.lessThan("mdDesktop")`
  font-size:3rem;
   margin-bottom: 9%;
   margin-top: -19%`}

   ${customMedia.lessThan("lgDesktop")`
font-size: 2rem;
margin-top: -20%`}
}
${customMedia.lessThan("smPhone")`
font-size: 1.5rem;
margin-top:20%;
  `}
`;

//SubTitle
const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 5rem;
  margin: 0 0 1rem;
  text-transform: uppercase;
  ${customMedia.lessThan("smTablet")`
  font-size: 0.9rem;
  margin-bottom: -9%;
   margin-top: -1%`}

  ${customMedia.lessThan("tablet")`
   font-size:1rem;
    margin-bottom: 0.3%;
    margin-top: .5%`}

  ${customMedia.lessThan("smPhone")`
  font-size: .8rem;
  margin-bottom: 0%;
  margin-top: 0%
  `}
`;
