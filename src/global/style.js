import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  background:${(props) => props.theme.pallet.page};
  font-family: 'Inter', 'sans-serif';
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
  color: #8b96a5;
}
`;
export const Flex = styled.div`
  display: flex;
  align-items: ${(props) => props.align};
  gap: ${(props) => props.gap + "px"};
  justify-content: ${(props) => props.justify};
  flex-wrap: ${(props) => props.wrap};
  flex-direction: ${(props) => props.direction};
`;
