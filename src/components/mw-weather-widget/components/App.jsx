import { Component } from "react";
import {
  fetchWeatherData,
  openweatherAdapter
} from "../services/open-weather-map-api";

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
    return "mw";
  }
}

export default WeatherApp;
