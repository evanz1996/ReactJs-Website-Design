import React from "react";
import { Button } from "./Button.js/Button";
import styled from "styled-components";
import playguitar from "../images/watch/playguitar.jpg";
import dance from "../images/watch/dance.jpg";
import culture from "../images/watch/culture.jpg";
function TabContent2() {
  return (
    <TabContainer>
      <div className="tab-content">
        <div className="tab-top-content">
          <span style={{ fontSize: "1.5rem" }}>
            Watch Theater shows and movies anytime, anywhere -personalized for
            you!
          </span>

          <Button className="btn"> Try it now!</Button>
        </div>
        {/* Tab Bottom Content */}
        <div className="tab-bottom-content">
          {/* TV Image Content */}
          <div>
            <img
              src={playguitar}
              alt="play-guitar"
              style={{ width: "15rem" }}
            />
            <h3> Watch in Live</h3>
            <p> Watch our artist as he will sing his new album</p>
          </div>
          {/* Mac Image Content */}
          <div>
            <img
              src={dance}
              alt="dance"
              style={{ width: "30rem", height: "20rem" }}
            />
            <h3> Watch on stage</h3>
            <p> Watch our Dylan and Anne to their breathtaking dance!</p>
          </div>
          {/* Phone Image Content */}
          <div>
            <img
              src={culture}
              alt="culture"
              style={{ width: "20rem", height: "25rem" }}
            />
            <h3> Watch in Mobile</h3>
            <p> Come and check the Filipino culture!</p>
          </div>
        </div>
      </div>
    </TabContainer>
  );
}

export default TabContent2;

//Main Tab Content Container

const TabContainer = styled.div`
  background: var(--main-deep-dark) .tab-content {
 
  }

  // Tab Top Content

  .tab-top-content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-content: center;
    align-item: center;
    padding: 2.5rem 0;
  }

  span {
    grid-column: 2/8;
  }
  .btn {
  margin: 0 1.25rem 1.25rem
    grid-column: 10/12;
  }

//Tab Bottom Content
.tab-bottom-content{
    display: grid;
    grid-template-columns:  auto auto auto auto ;

    text-align: center;
    margin-top:1rem;
}
h3{
  margin: 0.5rem
}
p{
    color: var(--main-grey)
}
`;
