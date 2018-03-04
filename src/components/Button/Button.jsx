import React from 'react';
import PropTypes from 'prop-types';
// import styles from './Button.scss';
import './Button.scss';

const Button = (props) => {
  const {
    text, onClick, style, className
  } = props;

  return (
    <button
      className={className || 'reusable-button'}
      onClick={onClick}
      style={style || null}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
  className: PropTypes.string,
};

Button.defaultProps = {
  className: null,
  style: null,
};


export default Button;
