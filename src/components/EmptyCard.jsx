import React, { Component } from 'react';

// import { DeleteIcon, RefreshIcon, WhiteBalanceSunnyIcon } from 'mdi-react';

import styles from './EmptyCard.scss';

export default class CityCard extends Component {
  render() {
    return (
      <div className={styles.root}>
        <p>No favorite cities to display</p>
      </div>
    );
  }
}