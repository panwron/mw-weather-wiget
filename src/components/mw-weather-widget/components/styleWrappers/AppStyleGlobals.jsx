import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");
  }
`;

const AppStyleWrapper = styled.div`
  font-family: "Roboto", sans-serif;
  width: 100%;
  margin-left: 100px;
  font-size: calc(10px + 0.1vw);
  box-sizing: border-box;
  color: #fff;
  margin: auto;
  padding-bottom: 20px;
  background-color: rgb(36, 43, 88);
`;

export default props => (
  <AppStyleWrapper>
    <GlobalStyle />
    {props.children}
  </AppStyleWrapper>
);
