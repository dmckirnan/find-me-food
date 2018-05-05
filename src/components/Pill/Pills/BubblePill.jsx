import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Pill.scss';
import { bubbleCache } from './utils';

const BubblePill = ({ color, className }) => {
  return (
    <div className={classNames(styles.bubblePill, bubbleCache[color], className)} />
  );
};

BubblePill.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};

BubblePill.defaultProps = {
  color: 'BLUE',
  className: null,
};

export default BubblePill;
