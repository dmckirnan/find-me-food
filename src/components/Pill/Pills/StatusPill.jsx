import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Pill.scss';
import { statusCache } from './utils';

const StatusPill = ({ text, className, color }) => {
  return (
    <div className={classNames(styles.statusPill, statusCache[color], className)}>
      {text}
    </div>
  );
};

StatusPill.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};

StatusPill.defaultProps = {
  text: '',
  color: 'BLUE',
  className: null,
};

export default StatusPill;
