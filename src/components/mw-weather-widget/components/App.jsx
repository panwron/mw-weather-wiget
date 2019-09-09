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
      weatherHoursData: null,
      error: false
    };
  }

  componentDidMount() {
    const fetchData = async () => {
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
    };

    fetchData().catch(e => {
      console.log(e);
      this.setState({ error: true });
      return null;
    });
  }

  render() {
    const {
      weatherData,
      activeHourIndex,
      weatherHoursData,
      loading
    } = this.state;
    if (this.state.loading) return null;
    if (this.state.error)
      return "weather data in not avaliable, please try again later";

    return (
      <WeatherProvider value={{ weatherData, activeHourIndex }}>
        <AppStyleWrapper>
          <AppHeader />
        </AppStyleWrapper>
      </WeatherProvider>
    );
  }
}

export default WeatherApp;
