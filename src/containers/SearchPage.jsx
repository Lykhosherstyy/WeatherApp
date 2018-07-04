
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCity, addCityToFavorities, fetchForecastForCity } from '../actions';

import SearchBox from '../components/SearchBox.jsx';
import Loader from '../components/Loader.jsx';
import WeatherInfo from '../components/WeatherInfo.jsx';
import FirstSearchMsg from '../components/FirstSearchMsg.jsx';
import Error from '../components/Error.jsx';
import Forecast from '../components/Forecast.jsx';


@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class SearchPage extends Component {
  handleForecastForCity = () => {
    const { forecast, weather } = this.props;

    forecast(weather.id);
  }
  handleAddCity = () => {
    const { favoriteCities, addCity,  weather } = this.props;

    const cityAlreadyExist = favoriteCities.some(item => item.name === weather.name);

    if (!cityAlreadyExist) addCity();
  }
  handleSearch = search => {
    const { searchCity } = this.props;

    searchCity(search);
  }
  render() {
    const { weather, loading, error, cityForecast, isFirstLoading } = this.props;

    console.log(cityForecast);

    return (
      <div>
        <SearchBox search={this.props.search} onSearch={this.handleSearch} />
        <Loader loading={loading}>
          {
            weather
              ?
              <WeatherInfo
                {...weather}
                onAddCity={this.handleAddCity}
                onGetForecast={this.handleForecastForCity}
              />
              :
              null
          }
          {
            isFirstLoading
              ?
              <FirstSearchMsg />
              :
              null
          }
          {
            !!error
              ?
              <Error text={error.message}/>
              :
              null
          }
        </Loader>
        <div>
          {
            cityForecast
              ?
              <Forecast
                {...cityForecast}
              />
              :
              null
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    weather: state.city.weather,
    error: state.city.error,
    loading: state.city.isLoading,
    isFirstLoading: state.city.firstLoading,
    favoriteCities:getFavoriteCities(state.favoriteCities),
    cityForecast:state.forecast.forecast
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchCity: (search) => dispatch(fetchCity(search)),
    addCity: () => dispatch(addCityToFavorities()),
    forecast: (id) => dispatch(fetchForecastForCity(id))
  };
}

function getFavoriteCities(cities) {
  return Object.keys(cities).map(id => ({ ...cities[id], id }));
}

