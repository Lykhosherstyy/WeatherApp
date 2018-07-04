import React, { Component }   from 'react';
import { Route, Switch } from 'react-router-dom';

import Nav from '../components/Nav.jsx';
import SearchPage from './SearchPage.jsx';
import FavoritePage from './FavoritePage.jsx';

import styles from './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className={styles.root}>
        <h1 className={styles.title} >Weather Info</h1>
        <div className={styles.app}>
          <Nav />
          <Switch>
            <Route exact  path='/' component={SearchPage} />
            <Route  path='/favorite' component={FavoritePage} />
          </Switch>
        </div>
      </div>
    );
  }
}