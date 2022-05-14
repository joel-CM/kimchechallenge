import styled from "styled-components";

export const Title = styled.h1`
  text-align: ${({ left, center, right }) =>
    left ? "left" : center ? "center" : right ? "right" : "left"};
  color: ${({ color }) => (color ? color : "#000")};
  font-size: ${({ size }) => (size ? size : "2rem")};
  margin: ${({ margin }) => (margin ? margin : "21.44px 0")};
  padding: ${({ padding }) => (padding ? padding : "0px")};
`;
