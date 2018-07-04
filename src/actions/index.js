import { getCityWeather } from '../api';
import { refreshWeatherByCityId } from '../api';
import { getForecast } from '../api';

export const requestCity = name => ({
  type:'REQUEST_CITY',
  name
});

export const requestCitySucces = city => ({
  type:'REQUEST_CITY_SUCCES',
  city
});

export const requestCityError = error => ({
  type:'REQUEST_CITY_ERROR',
  error
});

export const fetchCity = name => dispatch => {
  dispatch(requestCity(name));

  return getCityWeather(name)
    .then(weather => {
      dispatch(requestCitySucces(weather.data));
    })
    .catch(error => {
      console.error(error);
      dispatch(requestCityError(error.response.data));
    });
};

export const addCityToFavorities = () => (dispatch, getState) => {
  const weather = getState().city.weather;

  dispatch({
    type:'ADD_CITY',
    id:Date.now(),
    weather
  });
};

export const deleteCityFromFavorities = id => ({
  type:'DELETE_CITY',
  id
});

export const requestCityById = cityId => ({
  type:'REQUEST_REFRESH_CITY',
  cityId
});

export const requestCityByIdSucces = (weather, cityId) => ({
  type:'REQUEST_REFRESH_CITY_SUCCES',
  weather,
  cityId
});

export const requestCityByIdError = error => ({
  type:'REQUEST_REFRESH_CITY_ERROR',
  error
});

export const refreshFavoriteCity = (id, cityId) => dispatch => {
  dispatch(requestCityById(cityId));

  return refreshWeatherByCityId(id)
    .then(weather => {
      dispatch(requestCityByIdSucces(weather.data, cityId));
    })
    .catch(error => {
      console.error(error);
      dispatch(requestCityByIdError(error));
    });
};

export const requestForecast = id => ({
  type:'REQUEST_FORECAST',
  id
});

export const requestForecastSucces = forecast => ({
  type:'REQUEST_FORECAST_SUCCES',
  forecast
});

export const requestForecastError = error => ({
  type:'REQUEST_FORECAST_ERROR',
  error
});

export const fetchForecastForCity = id => dispatch => {
  dispatch(requestForecast(id));

  return getForecast(id)
    .then(forecast => {
      console.log(forecast);
      dispatch(requestForecastSucces(forecast.data));
    })
    .catch(error => {
      console.error(error);
      dispatch(requestForecastError(error));
    });
};
