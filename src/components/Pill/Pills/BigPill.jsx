import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Pill.scss';
import { bigCache } from './utils';

const BigPill = ({ color, className }) => {
  return (
    <div className={classNames(styles.bigPill, bigCache[color], className)} />
  );
};

BigPill.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};

BigPill.defaultProps = {
  color: 'BLUE',
  className: null,
};

export default BigPill;
