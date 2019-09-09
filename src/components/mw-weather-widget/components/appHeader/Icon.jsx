import React from "react";
import styled from "styled-components";
import { Sun } from "../shared/WeatherIcons";

const HeaderIco = styled.div`
  width: 30%;
  text-align: center;
  max-width: 80px;
`;

export default ({ icon = <Sun /> }) => <HeaderIco>{icon}</HeaderIco>;
