import falbackdata from "./api-fallbackdata.js";

// "https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/forecast/hourly?q=Warsaw,us&appid=b6907d289e10d714a6e88b30761fae22"

const apiKey = "b6907d289e10d714a6e88b30761fae22";
// using cors-anywhere to skip building proxy
const apiUrl =
  "https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/forecast/hourly?q=Warsaw,us&appid=";

const fetchApi = (endPoint, options) => {
  const request = {
    method: "GET"
  };

  const requestUrl = `${apiUrl}${endPoint}?APPID=${apiKey}`;

  return fetch(requestUrl, request)
    .then(response =>
      response
        .json()
        .then(json => ({ json, response }))
        .catch(() => ({ json: {}, response }))
    )
    .then(({ json, response }) => {
      if (!response.ok) {
        console.log("fetch error");
        // dev
        return falbackdata;
      }
      return json;
    })
    .catch(e => {
      console.error(e);
      return null;
    });
};

// Normalize & filter hours array for specified day
const wetherByHourArray = (data, filterDate) => {
  const selectedDay = new Date(filterDate).getDay();
  return data
    .filter(hour => selectedDay === new Date(hour.dt_txt).getDay())
    .map((hour, index) => {
      const {
        dt_txt,
        main: { temp, temp_max, temp_min },
        weather
      } = hour;
      return {
        id: index,
        date: dt_txt,
        hour: new Date(dt_txt).getHours(),
        temp: temp,
        tmax: temp_max,
        tmin: temp_min,
        description: weather[0].description,
        icon: weather[0].icon
      };
    });
};

// Normalize fetched data
export const openweatherAdapter = (
  openweathermapdata,
  filterDate = "2019-03-28"
) => {
  const { message, city, list } = openweathermapdata;

  return {
    id: message,
    city: city.name,
    weatherByHour: wetherByHourArray(list, filterDate)
  };
};

export const fetchWeatherData = () => fetchApi(apiUrl);
