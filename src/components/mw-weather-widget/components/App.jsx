import { Component } from "react";
import { fetchWeatherData } from "../services/open-weather-map-api";

class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const data = await fetchWeatherData();
    console.log(data);
  }

  render() {
    return "mw";
  }
}

export default WeatherApp;
