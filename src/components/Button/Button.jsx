import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';

const Button = (props) => {
  const {
    text, onClick, style, className, reactKey
  } = props;

  return (
    <button
      className={className || styles.reusableButton}
      onClick={onClick}
      style={style || null}
      key={reactKey}
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
  reactKey: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

Button.defaultProps = {
  className: null,
  style: null,
};


export default Button;
