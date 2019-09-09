import React, { Component } from "react";
import {
  fetchWeatherData,
  openweatherAdapter
} from "../services/open-weather-map-api";
import { WeatherProvider } from "../store/weather-context";
import AppHeader from "./appHeader/AppHeader";
import AppStyleWrapper from "./styleWrappers/AppStyleGlobals";

class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      units: "C",
      weatherData: null,
      activeHourIndex: null,
      weatherByHour: null,
      error: false
    };
  }

  componentDidMount() {
    const fetchData = async () => {
      const data = await fetchWeatherData();
      const appData = openweatherAdapter(data);

      if (!appData) {
        this.setState({ error: true });
        return;
      }

      console.log(appData);

      this.setState({
        weatherData: appData,
        weatherByHour: appData.weatherByHour,
        activeHourIndex: new Date().getHours(),
        loading: false
      });
    };

    fetchData();
  }

  render() {
    const { weatherData, activeHourIndex, weatherByHour } = this.state;
    if (this.state.loading) return null;
    if (this.state.error)
      return "weather data in not avaliable, please try again later";

    return (
      <WeatherProvider
        value={{
          weatherData,
          activeHourIndex,
          selectedHourData: weatherByHour[activeHourIndex]
        }}
      >
        <AppStyleWrapper>
          <AppHeader />
        </AppStyleWrapper>
      </WeatherProvider>
    );
  }
}

export default WeatherApp;
