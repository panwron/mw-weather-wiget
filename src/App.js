import React from "react";
import MwWeatherApp from "./components/mw-weather-widget";

function App() {
  return (
    <React.Fragment>
      <div style={{ display: "inline-block", width: "50%" }}>
        <MwWeatherApp />
      </div>
      <div
        style={{
          display: "inline-block",
          width: "25%",
          float: "right"
        }}
      >
        <MwWeatherApp />
      </div>

      <div style={{ display: "block", width: "100%" }}>
        <MwWeatherApp />
      </div>
    </React.Fragment>
  );
}

export default App;
