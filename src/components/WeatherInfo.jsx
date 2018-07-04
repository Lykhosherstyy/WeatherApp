import React, { Component } from 'react';

import { StarIcon } from 'mdi-react';

import styles from './WeatherInfo.scss';

export default class WeatherInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorite: false
    };
  }
  handleForecast = () => {
    const { onGetForecast } = this.props;

    onGetForecast();
  }
  handleAddCity = () => {
    const { onAddCity } = this.props;

    this.setState({
      favorite: true
    });

    onAddCity();
  }
  render() {
    const { name, main, weather, dt } = this.props;

    const { favorite } = this.state;

    const normalDate = timeConverter(dt);

    const roundedTemp = Math.round(main.temp);

    const iconUrl = `http://openweathermap.org/img/w/${weather[0].icon}.png`;

    return (
      <div className={styles.root}>
        <div className={styles.WeatherInfo}>
          <div className={styles.city}>{name}</div>
          <div className={styles.date}>{normalDate}</div>
          <div>
            <img src={iconUrl} className={styles.icon} />
            <div className={styles.temperature}>{roundedTemp}<span className={styles.units}>°C</span></div>
          </div>
          <div className={styles.tempMaxMin}>{main.temp_max}°C / {main.temp_min}°C</div>
          <div className={styles.description}>{weather[0].description}</div>
        </div>
        <div className={styles.panel}>
          <button type='button' className={styles.button} onClick={this.handleAddCity}>
            <StarIcon size='24' color={favorite ? 'yellow' : 'white'}/>
          </button>
          <button type='button' className={styles.button} onClick={this.handleForecast}>Get Forecast</button>
        </div>
      </div>
    );
  }
}

const timeConverter = (timestamp) => {
  const a = new Date(timestamp * 1000);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = months[a.getMonth()];
  const date = a.getDate();
  const hour = a.getHours();
  const min = a.getMinutes() < 10 ? `0${a.getMinutes()}` : a.getMinutes();
  const time = `${date} ${month} ${hour}:${min}`;

  // console.log(a.getMinutes(), min);
  return time;
};