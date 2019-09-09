import React from "react";
import styled from "styled-components";
import { format } from "date-fns";

import DateLocation from "./DateLocation";
import Icon from "./Icon";
import DetailsConatiner from "./DetailsContainer";
import WeatherContext from "../../store/weather-context";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.5em;
`;

const AppHeader = () => {
  const {
    weatherData: { city },
    selectedHourData: { date }
  } = React.useContext(WeatherContext);

  const day = format(new Date(date), "EEEE");
  const formatedDate = format(new Date(date), "d. LLLL");

  return (
    <Header>
      <Icon />
      <DetailsConatiner />
      <DateLocation city={city} day={day} formatedDate={formatedDate} />
    </Header>
  );
};

export default AppHeader;
