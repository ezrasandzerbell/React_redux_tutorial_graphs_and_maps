import axios from 'axios';
const API_KEY = '32410ee5ed8d5ce5a85da0b07ae88c2b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&APPID=${API_KEY}` ;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
