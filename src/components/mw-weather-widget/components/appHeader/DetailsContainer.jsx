import React from "react";
import styled from "styled-components";

import WeatherContext from "../../store/weather-context";
import { kToC } from "../../../utils/units";
import Details from "./Details";

const WigetHeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.5em;
`;

const DetailsConatiner = () => {
  const {
    selectedHourData: { description, temp, tmax, tmin }
  } = React.useContext(WeatherContext);

  const temp_max = kToC(tmax);
  const temp_min = kToC(tmin);
  const temperature = kToC(temp);

  return (
    <WigetHeaderWrapper>
      <Details
        description={description}
        temp_max={temp_max}
        temp_min={temp_min}
        temp={temperature}
      />
    </WigetHeaderWrapper>
  );
};

export default DetailsConatiner;
