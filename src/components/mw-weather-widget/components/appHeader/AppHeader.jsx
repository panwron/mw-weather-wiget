import React from "react";
import styled from "styled-components";
import Details from "./Details";
import DateLocation from "./DateLocation";
import Icon from "./Icon";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.5em;
`;

const AppHeader = () => {
  return (
    <Header>
      <Icon />
      <Details />
      <DateLocation />
    </Header>
  );
};

export default AppHeader;
