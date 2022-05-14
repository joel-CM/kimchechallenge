import styled from "styled-components";

export const Text = styled.span`
  font-size: ${({ size }) => (size ? size : "16px")};
`;
