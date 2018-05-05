import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './LoadingDots.scss';

const LoadingDots = ({
  text, fontSize, dotSize, className
}) => {
  return (
    <div className={classnames(styles.loading, className)} style={{ fontSize, textAlign: 'center' }}>
      {text}
      <span style={{ fontSize: dotSize }}>.</span>
      <span style={{ fontSize: dotSize }}>.</span>
      <span style={{ fontSize: dotSize }}>.</span>
    </div>
  );
};

LoadingDots.propTypes = {
  text: PropTypes.string,
  fontSize: PropTypes.string,
  dotSize: PropTypes.string,
  className: PropTypes.string,
};

LoadingDots.defaultProps = {
  text: 'Loading',
  fontSize: '18px',
  dotSize: '36px',
  className: null,
};

export default LoadingDots;
