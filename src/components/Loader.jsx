import React, { Component }   from 'react';

import styles from './Loader.scss';

export default class Loader extends Component {
  render() {
    const { loading, children } = this.props;

    return (
      <div className={styles.root}>
        {
          loading
            ?
            <div className={styles.overlay}>
              <div className={styles.spinner}>
                <div>o</div>
                <div>o</div>
                <div>o</div>
                <div>o</div>
                <div>o</div>
                <div>o</div>
                <div>o</div>
                <div>o</div>
              </div>
            </div>
            :
            children
        }
      </div>
    );
  }
}

