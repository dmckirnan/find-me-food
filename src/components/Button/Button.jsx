import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';

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
  className: PropTypes.string,
  style: PropTypes.object,
};

Button.defaultProps = {
  className: null,
  style: null,
};


export default Button;
