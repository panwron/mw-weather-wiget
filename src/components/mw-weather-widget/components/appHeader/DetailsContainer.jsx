import React, { useEffect } from "react";
import styled from "styled-components";

import WeatherContext from "../../store/weather-context";
import { kToC } from "../../../utils/units";
import Details from "./Details";
import { ratio } from "../../../utils/sizing";

const WigetHeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const DetailsConatiner = ({ appWidth }) => {
  const {
    selectedHourData: { description, temp, tmax, tmin }
  } = React.useContext(WeatherContext);

  const temp_max = kToC(tmax, true, 0);
  const temp_min = kToC(tmin, true, 0);
  const temperature = kToC(temp, false, 0);

  return (
    <WigetHeaderWrapper>
      <Details
        description={description}
        temp_max={temp_max}
        temp_min={temp_min}
        temp={temperature}
        appWidth={appWidth}
      />
    </WigetHeaderWrapper>
  );
};

export default DetailsConatiner;
