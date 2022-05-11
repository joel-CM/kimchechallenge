import styled from "styled-components";

export const Title = styled.h1`
  text-align: ${({ left, center, right }) =>
    left ? "left" : center ? "center" : right ? "right" : "left"};
  color: ${({ color }) => (color ? color : "#000")};
  font-size: ${({ size }) => (size ? size : "2rem")};
`;
