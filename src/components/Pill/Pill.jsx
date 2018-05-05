import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { BigPill, BubblePill, StatusPill } from './Pills/index';
import styles from './Pills/Pill.scss';

export default class Pill extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    color: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    text: '',
    color: 'BLUE',
  };

  constructor(props) {
    super(props);
    this.state = {
      pills: {
        BIG: BigPill,
        STATUS: StatusPill,
        BUBBLE: BubblePill,
      },
    };
  }

  render() {
    const PillComponent = this.state.pills[this.props.type];

    return (
      <PillComponent
        color={this.props.color}
        text={this.props.text || null}
        className={this.props.className}
      />
    );
  }
}
