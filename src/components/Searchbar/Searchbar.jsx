import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Searchbar.scss';

export default class Searchbar extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      search: this.props.value,
    };
  }

  changeHandler = (e) => {
    this.setState({ search: e.target.value });
    this.props.onChange(e);
  }

  render() {
    return (
      <div className={styles.search}>
        <span id={styles.faSearch} className="fa fa-search" />
        <input
          placeholder="Search..."
          className={styles.searchField}
          value={this.state.search}
          onChange={this.changeHandler}
        />
      </div>
    );
  }
}
