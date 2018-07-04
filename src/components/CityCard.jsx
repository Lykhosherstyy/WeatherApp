import React, { Component } from 'react';

import { DeleteIcon, RefreshIcon } from 'mdi-react';

import styles from './CityCard.scss';

export default class CityCard extends Component {
  handleDelete = () => {
    const { cityId, onDelete } = this.props;

    onDelete(cityId);
  }
  handleRefresh = () => {
    const { cityId, id, onRefresh } = this.props;

    onRefresh(id, cityId);
  }
  render() {
    const { name, main, weather, refreshing } = this.props;

    const roundedTemp = Math.round(main.temp);

    const iconUrl = `http://openweathermap.org/img/w/${weather[0].icon}.png`;

    console.log(refreshing);
    return (
      <div className={styles.root}>
        <div className={styles.weather}>
          <img src={iconUrl} className={styles.icon} />
          <div>
            <div className={styles.city}>{name}</div>
            <div className={styles.temp}>{roundedTemp}°C</div>
          </div>
        </div>
        <div className={styles.options}>
          <button className={styles.button} onClick={this.handleDelete}><DeleteIcon  color='grey'/></button>
          <button className={styles.button} onClick={this.handleRefresh}><RefreshIcon color='grey' /></button>
        </div>
        {
          refreshing
            ?
            <div className={styles.refreshingOverlay}>refreshing...</div>
            :
            null
        }
      </div>
    );
  }
}