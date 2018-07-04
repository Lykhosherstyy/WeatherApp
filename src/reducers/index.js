import { combineReducers } from 'redux';

import { favoriteCities } from './FavoriteCities.js';
import { city } from './CityWeather.js';
import { forecast } from './Forecast.js';

export default combineReducers({ city, forecast, favoriteCities });