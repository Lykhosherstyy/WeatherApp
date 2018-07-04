import React, { Component } from 'react';

import styles from './Error.scss';

export default class Error extends Component {
  render() {
    const { text } = this.props;

    return (
      <div className={styles.root}>
        <p>{text}</p>
      </div>
    );
  }
}