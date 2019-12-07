import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { iosWorld } from "react-icons-kit/ionicons/iosWorld";
import { arrowDownB } from "react-icons-kit/ionicons/arrowDownB";

class Footer extends Component {
  state = {
    langContent: false
  };

  handleToggle = e => {
    this.setState({
      langContent: !this.state.langContent
    });
  };
  render() {
    return (
      <FooterContainer>
        <span style={{ marginLeft: "1%" }}>
          Questions? <Link>Call-123435-5445</Link>
        </span>
        <div className="footer-columns">
          <ul>
            <li>
              <Link> Gift Card Items</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link> Terms of Use</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link> Privacy Statement</Link>
            </li>
          </ul>

          {/* Language Button */}
          <div className="lang-btn" onClick={this.handleToggle}>
            <Icon icon={iosWorld} size={20} />
            &nbsp;English&nbsp;
            <Icon icon={arrowDownB} />
          </div>
        </div>
        {/* Toggle Language*/}
        {this.state.langContent && (
          <div className="lang-toggle">
            <ul>
              <li> English</li>
            </ul>
            <ul>
              <li> French</li>
            </ul>
          </div>
        )}
      </FooterContainer>
    );
  }
}

export default Footer;

//Footer
const FooterContainer = styled.footer`
  justify-content: center;
  background: var(0, 0, 0, 0.8);
  padding-top: 11rem;
  padding-bottom: -3rem;
  margin-top: 5rem;
  position: relative;
  z-index: 5;

  .footer-columns {
    width: 70%;
    margin: 1rem auto 0;
    font-size: 1rem;
    margin-top: -1rem;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  ul li {
    list-style: none;
    line-height: 2rem;
    margin-top: 1rem;
  }
  a {
    color: #999;
  }
  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  //Language Button
  .lang-btn {
    background: transparent;
    border: 0.9px solid #333;
    padding: 1rem;
    width: 8rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 2rem 0 2rem;
    cursor: pointer;
  }

  .lang-toggle {
    margin-left: 15%;
    position: absolute;
    margin-top: -0.9rem;
  }

  .lang-toggle ul {
    background: var(--main-deep-dark);
    width: 8rem;
    border: 0.8px solid #333;
    text-align: center;
    margin-top: -1rem;
    margin-left: -0.1rem;
    &:hover {
      background: #ff5722;
    }
  }
`;
