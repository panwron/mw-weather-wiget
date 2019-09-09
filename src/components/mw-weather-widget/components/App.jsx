import React, { Component } from "react";
import {
  fetchWeatherData,
  openweatherAdapter
} from "../services/open-weather-map-api";
import { WeatherProvider } from "../store/weather-context";
import AppHeader from "./appHeader/AppHeader";

class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      units: "C",
      weatherData: null,
      activeHourIndex: null,
      weatherHoursData: null
    };
  }

  async componentDidMount() {
    const data = await fetchWeatherData();
    console.log(data);
    const appData = openweatherAdapter(data);
    console.log(appData);

    this.setState(
      {
        weatherData: data,
        activeHourIndex: new Date().getHours(),
        weatherHoursData: data.weatherByHour,
        loading: false
      },
      () => {
        console.log("### init with data ###");
      }
    );
  }

  render() {
    const {
      weatherData,
      activeHourIndex,
      weatherHoursData,
      loading
    } = this.state;
    if (this.state.loading) return null;

    return (
      <WeatherProvider value={{ weatherData, activeHourIndex }}>
        <AppHeader />
      </WeatherProvider>
    );
  }
}

export default WeatherApp;
