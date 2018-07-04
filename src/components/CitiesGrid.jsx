import React, { Component } from 'react';

import CityCard from './CityCard.jsx';
import EmptyCard from './EmptyCard.jsx';

import styles from './CitiesGrid.scss';

export default class CitiesGrid extends Component {
  handleDelete = id => {
    const { deleteFromFavorite } = this.props;

    deleteFromFavorite(id);
  }
  handleRefresh = (id, cityId) => {
    const { refreshCity } = this.props;

    refreshCity(id, cityId);
  }
  render() {
    const { cities } = this.props;

    return (
      <div className={styles.root}>
        {
          cities.length !== 0
            ? cities
              .map((city) => (
                <CityCard
                  key={city.id}
                  onDelete={this.handleDelete}
                  onRefresh={this.handleRefresh}
                  {...city}
                />
              ))
            : <EmptyCard />
        }
      </div>
    );
  }
}