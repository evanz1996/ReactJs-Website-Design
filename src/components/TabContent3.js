import React from "react";
import styled from "styled-components";
import { Button } from "./Button.js/Button";
import { Icon } from "react-icons-kit";
import { checkmark } from "react-icons-kit/ionicons/checkmark";
import { close } from "react-icons-kit/ionicons/close";

function TabContent3() {
  return (
    <TabContainer>
      <div className="tab-content">
        <div className="tab-top-content">
          <span style={{ fontSize: "1.5rem" }}>
            Choose one plan and watch everything on theater!
          </span>
          <Button className="btn"> Try it now</Button>
        </div>
        {/* Tab Bottom Content */}
        <div classname="tab-bottom-content">
          <table>
            <thead>
              <tr>
                <th> </th>
                <th> Basic </th>
                <th> Standard </th>
                <th> Premium </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> Monthly price</td>
                <td> $9.99</td>
                <td>$ 13.99</td>
                <td> $16.99</td>
              </tr>
              <tr>
                <td> HD Available</td>
                <td>
                  <Icon icon={close} size="1rem"></Icon>
                </td>
                <td>
                  <Icon icon={checkmark} size="1rem"></Icon>
                </td>
                <td>
                  <Icon icon={checkmark} size="1rem"></Icon>
                </td>
              </tr>
              <tr>
                <td> Watch on Live</td>
                <td>
                  <Icon icon={close} size="1rem"></Icon>
                </td>
                <td>
                  <Icon icon={close} size="1rem"></Icon>
                </td>
                <td>
                  <Icon icon={checkmark} size="1rem"></Icon>
                </td>
              </tr>
              <tr>
                <td> Screen you can watch all the time</td>
                <td> 1</td>
                <td> 2</td>
                <td> 3</td>
              </tr>
              <tr>
                <td> Watch on Stage</td>
                <td>
                  <Icon icon={checkmark} size="1rem"></Icon>
                </td>
                <td>
                  <Icon icon={checkmark} size="1rem"></Icon>
                </td>
                <td>
                  <Icon icon={checkmark} size="1rem"></Icon>
                </td>
              </tr>
              <tr>
                <td> Cancel anytime</td>
                <td>
                  <Icon icon={checkmark} size="1rem"></Icon>
                </td>
                <td>
                  <Icon icon={checkmark} size="1rem"></Icon>
                </td>
                <td>
                  <Icon icon={checkmark} size="1rem"></Icon>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </TabContainer>
  );
}

export default TabContent3;

//Main Container
const TabContainer = styled.div`
  background: var(--main-deep-dark);

  .tab-content {
    margin-left: 15%;
    margin-right: 15%;
    padding-bottom: 1%;
  }
  .tab-top-content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    padding: 3rem 0 0;
  }
  span {
    grid-column: 3/9;
  }
  .btn {
    grid-column: 9/12;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  //Tab Bottom Content
  .tab-bottom-content {
    margin: 2rem auto;
  }

  //Table
  table {
    width: 100%;
    margin-top: 2rem;
    border-collapse: collapse;
  }

  table thead th {
    text-transform: uppercase;
    padding: 0.5rem;
  }

  table tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
  }

  table tbody tr td {
    color: #999;
    padding: 0.8rem 0.5rem;
    text-align: center;
  }
  table tbody tr td:first-child {
    text-align: left;
  }

  table tbody tr:nth-child(even) {
    background: #222;
  }
`;
