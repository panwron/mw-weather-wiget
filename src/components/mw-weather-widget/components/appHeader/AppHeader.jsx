import React from "react";
import WeatherContext from "../../store/weather-context";

const AppHeader = () => {
  const data = React.useContext(WeatherContext);
  console.log("header data", data);
  return <div>Header</div>;
};

export default AppHeader;
