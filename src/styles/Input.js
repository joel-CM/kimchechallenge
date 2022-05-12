import styled from "styled-components";

export const Input = styled.input.attrs((props) => ({
  type: `${props.type}`,
  placeholder: `${props.placeHolder}`,
}))`
  transition-duration: 0.5s;
  margin: 0;
  border: none;
  padding: 10px 15px 10px 45px;
  display: block;
  width: 100%;
  border-radius: 20px;
`;
