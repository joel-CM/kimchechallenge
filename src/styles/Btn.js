import styled from "styled-components";

export const Button = styled.button`
  border: none;
  border-radius: ${(props) => (props.radius ? props.radius : "3px")};
  padding: ${(props) => (props.padding ? props.padding : "5px 10px")};
  margin: ${(props) => (props.margin ? props.margin : "3px")};
  background: ${(props) => (props.color ? props.color : "#fff")};
  color: ${(props) => (props.color ? props.color : "#000")};
  cursor: ${(props) => (props.cursor ? props.cursor : "pointer")};
  font-size: ${(props) => (props.size ? props.size : "16px")};
  &:hover {
    outline: 1px solid #000;
  }
  &:active {
    color: red;
  }
`;
