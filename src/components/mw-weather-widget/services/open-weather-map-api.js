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
        throw response;
      }
      return json;
    })
    .catch(e => {
      console.error(e);
      return null;
    });
};

export const fetchWeatherData = () => fetchApi(apiUrl);
