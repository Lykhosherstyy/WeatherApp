import axios from 'axios';

const API_URL = 'http://api.openweathermap.org/data/2.5';
const API_KEY = 'ac4e79d6a9cd117f06aeca6fdd87e9db';

const requestUrl = (url, params) => {
  return axios.get(`${API_URL}/${url}`, { params });
};

export function getCityWeather(city) {
  const params = {
    q: city,
    APPID: API_KEY,
    units:'metric'
  };

  return requestUrl('weather', params);
}

export function getForecast(cityId) {
  const params = {
    id: cityId,
    APPID: API_KEY,
    cnt: 5,
    units:'metric'
  };

  return requestUrl('forecast', params);
}

export function refreshWeatherByCityId(cityId) {
  const params = {
    id: cityId,
    APPID: API_KEY,
    units:'metric'
  };

  return requestUrl('weather', params);
}