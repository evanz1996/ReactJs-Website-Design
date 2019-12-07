import styled from "styled-components";

export const Button = styled.button`
  display: inline-block;
  background: #4d192b;
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
    background: #db3e00;
  }
`;
