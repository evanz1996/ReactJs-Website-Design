import React from "react";
import cancel from "../images/watch/cancel.jpg";
import styled from "styled-components";
import { Button } from "./Button.js/Button";

function TabContent1() {
  return (
    <TabContentContainer>
      <div className="container">
        <div className="tab-content">
          <div>
            <span style={{ marginBottom: "-19rem" }}>
              If you decide that Theater isn't for you - no problem. No
              commitment. Cancel online anytime
            </span>
            <br />
            <Button style={{ marginTop: "5rem" }}>try it now</Button>
          </div>
          <img src={cancel}></img>
        </div>
      </div>
    </TabContentContainer>
  );
}

export default TabContent1;

//Main Content Container
const TabContentContainer = styled.div`
  background: var(--main-deeper-dark);

  .container {
    margin: 0 10%;
  }
  img {
    width: 25rem;
  }

  .tab-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4rem;
    align-items: center;
    font-size: 2rem;
    padding: 2.5rem;
  }
`;
//  grid-template-columns: repeat(2, 1fr)
//  grid-gap:2rem;
//  align-items:center;
//  font-size:2rem;
//  padding:2.5rem;
