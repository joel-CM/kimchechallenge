import styled from "styled-components";

export const Container = styled.div`
  width: 970px;
  max-width: 100%;
  margin: 0 auto;
  background: ${({ bg }) => (bg ? bg : "#fff")};
`;
