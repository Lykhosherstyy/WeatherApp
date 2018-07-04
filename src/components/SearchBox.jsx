import React, { Component } from 'react';

import { MagnifyIcon } from 'mdi-react';

import styles from './SearchBox.scss';

export default class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.search || ''
    };
  }
  handleTextChange = e => {
    this.setState({
      text: e.target.value
    });
  }
  handleSearch = (e) => {
    e.preventDefault();
    const { text } = this.state;
    const { onSearch } = this.props;

    if (text) {
      onSearch(text);
      // this.setState({
      //   text: ''
      // });
    }
  }
  render() {
    const { text } = this.state;

    return (
      <div className={styles.root}>
        <form onSubmit={this.handleSearch}>
          <div className={styles.inputGroup}>
            <input
              type='search'
              className={styles.input}
              value={this.state.text}
              onChange={this.handleTextChange}
              placeholder='Search...'
            />
            <button
              type='button'
              className={styles.button}
              disabled={!text}
              onClick={this.handleSearch}
            >
              <MagnifyIcon sixe='18'/>
            </button>
          </div>
        </form>
      </div>
    );
  }
}