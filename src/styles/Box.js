import styled from "styled-components";

export const Box = styled.div`
  display: ${({ block, flex }) => (block ? "block" : flex ? "flex" : "block")};
  justify-content: ${({ justify }) => (justify ? justify : "start")};
  align-items: ${({ align }) => (align ? align : "start")};
`;
