import axios from 'axios';

//  API and url for OpenWeatherApp
const API_KEY = 'a2f8768f12720457681774c3af191535';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//  Export FETCH_WEATHER as a
//  usable const elsewhere
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

  //  Request data via axios
  const url =`${ROOT_URL}&q=${city}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }

}
