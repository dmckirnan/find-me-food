import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Input.scss';

export default class Input extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    placeholder: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    maxLength: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.bool,
    ]),
    hasError: PropTypes.bool,
    error: PropTypes.string,
    label: PropTypes.string,
    className: PropTypes.string,
    divClass: PropTypes.string,
    id: PropTypes.string,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    value: '',
    placeholder: '',
    hasError: false,
    error: null,
    label: null,
    disabled: false,
    maxLength: 0,
    id: null,
    className: null,
    divClass: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      count: 0,
      overLimit: false,
    };
  }

  changeHandler = (e) => {
    this.setState({
      value: this.props.value,
      count: e.target.value.length,
      overLimit: e.target.value.length > this.props.maxLength,
    });
    this.props.onChange(e);
  }

  render() {
    const {
      onChange, placeholder, hasError,
      error, className, label, divClass, disabled,
      maxLength, id,
    } = this.props;
    const { overLimit, count, value } = this.state;

    return (
      <div className={classNames(styles.inputContainer, divClass)}>
        {label &&
          <p className={disabled ? styles.labelDisabled : styles.inputLabel}>
            {label}
          </p>
        }
        <input
          className={classNames(
            styles.input, className,
            { [styles.error]: hasError || (this.props.maxLength !== 0 && overLimit) },
            { [styles.disabled]: disabled },
          )}
          onChange={this.changeHandler}
          defaultValue={value}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength === 0 ? null : maxLength}
          id={id}
        />
        {!disabled && hasError && error &&
          <p className={styles.errorText}>
            {error}
          </p>
        }
        {maxLength > 0 && (maxLength - count <= 30) &&
          <p
            className={classNames(styles.labelCount,
              { [styles.errorCount]: (this.props.maxLength !== 0 && overLimit) }
            )}
          >
            {`${this.state.count}/${this.props.maxLength}`}
          </p>
        }
      </div>
    );
  }
}
