import { connect } from 'react-redux';

import { deleteCityFromFavorities, refreshFavoriteCity } from '../actions';

import CitiesGrid from '../components/CitiesGrid.jsx';


function mapStateToProps(state) {
  return {
    cities: getFavoriteCities(state.favoriteCities)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteFromFavorite: (id) => dispatch(deleteCityFromFavorities(id)),
    refreshCity: (id, cityId) => dispatch(refreshFavoriteCity(id, cityId))
  };
}

function getFavoriteCities(cities) {
  return Object.keys(cities).map(cityId => ({ ...cities[cityId], cityId }));
}

export default connect(mapStateToProps, mapDispatchToProps)(CitiesGrid);
