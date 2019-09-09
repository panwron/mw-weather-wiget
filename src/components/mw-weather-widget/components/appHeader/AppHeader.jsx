import React, { useEffect } from "react";
import styled from "styled-components";
import { format } from "date-fns";

import DateLocation from "./DateLocation";
import Icon from "./Icon";
import DetailsConatiner from "./DetailsContainer";
import WeatherContext from "../../store/weather-context";
import { ratio } from "../../../utils/sizing";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: ${props => ratio(props.appWidth, 100)}px
    ${props => ratio(props.appWidth)}px ${props => ratio(props.appWidth, 160)}px;
`;

const AppHeader = () => {
  const [appWidth, setAppWidth] = React.useState(0);
  const headerRef = React.createRef();

  useEffect(() => {
    if (headerRef.current) {
      console.log(headerRef.current.offsetWidth);
      setAppWidth(headerRef.current.offsetWidth);
    }
  }, [appWidth, headerRef]);

  const {
    weatherData: { city },
    selectedHourData: { date }
  } = React.useContext(WeatherContext);

  const day = format(new Date(date), "EEEE");
  const formatedDate = format(new Date(date), "d. LLLL");

  return (
    <Header appWidth={appWidth} ref={headerRef}>
      <Icon />
      <DetailsConatiner appWidth={appWidth} />
      <DateLocation
        appWidth={appWidth}
        city={city}
        day={day}
        formatedDate={formatedDate}
      />
    </Header>
  );
};

export default AppHeader;
