import React, { Component }   from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Nav.scss';

export default class App extends Component {
  render() {
    return (
      <div className={styles.root}>
        <ul className={styles.navList}>
          <li>
            <NavLink
              exact to='/'
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              SEARCH
            </NavLink>
          </li>
          <li>
            <NavLink
              exact to='/favorite'
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              FAVORITE
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}