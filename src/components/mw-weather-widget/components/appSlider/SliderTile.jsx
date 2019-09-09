import React from "react";
import { format } from "date-fns";
import Tile from "./Tile";
import { Sun } from "../shared/WeatherIcons";
import { kToC } from "../../../utils/units";
import WeatherContext from "../../store/weather-context";

const SliderTile = ({ hour, date, temp, sliderWidth, scrollToHour }) => {
  const { onSelectedHour, activeHourIndex } = React.useContext(WeatherContext);

  const isCurrentHour = new Date(date).getHours() === activeHourIndex;
  const displayHour = format(new Date(date), "HH:mm");
  const displayIco = <Sun />;
  const displayTemp = kToC(temp, false);
  const handleOnClick = () => {
    onSelectedHour(hour);
  };

  return (
    <Tile
      onClick={handleOnClick}
      hour={displayHour}
      active={isCurrentHour}
      ico={displayIco}
      temp={displayTemp}
      scrollToHour={scrollToHour}
      width={sliderWidth}
    />
  );
};

export default SliderTile;
