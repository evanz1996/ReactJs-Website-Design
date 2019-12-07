import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class FooterChoosePlan extends Component {
  render() {
    return (
      <FooterContainer>
        <span>
          Questions? <Link>Call-123435-5445</Link>
        </span>
        <div className="footer-columns">
          <ul>
            <li>
              <Link>FAQ</Link>
            </li>
          </ul>
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
        </div>
        )}
      </FooterContainer>
    );
  }
}

export default FooterChoosePlan;

const FooterContainer = styled.footer`
display:grid;
  justify-content: center;
  background: #f3f3f3;
  padding-top: 1rem;
  padding-bottom: -3rem;
  margin-top: 10rem;
  position: relative;
  z-index: 5;
  border-top: 1px solid #e6e6e6;

  .footer-columns {
    width: 100%;
    margin: 1rem 3rem 0 3rem ;
    margin-left: 1rem;
    font-size: 1rem;
    margin-top: -1rem;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(4, 15rem);
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
  }}

  span{
      color: #999
  }
  `;
