import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Button.scss';

const colorCache = {
  BLUE: styles.reusableButton,
  RED: styles.reusableRedButton,
  GREEN: styles.reusableGreenButton,
  WHITE_RED: styles.reusableWhiteRedButton,
  WHITE_BLUE: styles.reusableWhiteBlueButton,
  WHITE_GREEN: styles.reusableWhiteGreenButton,
};

/**
 * @export
 * @function Button
 * @extends Component
 */
export default class Button extends Component {
  /**
   * @typedef Button Props
   * @prop {function()} click -- Click Callback
   * @prop {string} text -- Button Text
   * @prop {string} className -- Appends given className to button className
   * @prop {string} type -- 6 Available Default Types - RED, BLUE, GREEN, WHITE_RED, WHITE_BLUE, WHITE_GREEN
   * @prop {Object} style -- Applies Inline Styles to Button
   * @prop {Node} svg -- SVG Component passed as Props
   * @prop {bool} svgLeft -- Displays SVG on left-side of Button
   * @prop {bool} svgRight -- Displays SVG on right-side of Button
   * @prop {bool} disabled -- Button is Disabled based off this bool value
  */
  static propTypes = {
    click: PropTypes.func,
    text: PropTypes.string,
    type: PropTypes.string,
    style: PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ])
    ),
    className: PropTypes.string,
    disabled: PropTypes.bool,
    svgLeft: PropTypes.bool,
    svgRight: PropTypes.bool,
    svg: PropTypes.node,
  };

  static defaultProps = {
    click: null,
    style: null,
    className: null,
    type: null,
    text: null,
    svg: null,
    disabled: false,
    svgLeft: false,
    svgRight: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  componentWillUnmount() {
    if (this.timeout) clearTimeout(this.timeout);
  }

  timeout = 0;

  determineClass = () => {
    const {
      type, className, disabled,
    } = this.props;

    const classTypeIsntDisabled = (className && type && !disabled);
    const typeIsValid = (type && colorCache[type] && type !== 'BLUE');
    const animation = { [styles.animate]: this.state.clicked };

    if (disabled) return classNames(styles.reusableDisabledButton, className);
    if (classTypeIsntDisabled) return classNames(styles.reusableButton, colorCache[type], className, animation);
    if (className) return classNames(styles.reusableButton, className, animation);
    if (typeIsValid) return classNames(styles.reusableButton, colorCache[type], animation);
    return classNames(styles.reusableButton, animation);
  }

  clickHandler = () => {
    this.setState({ clicked: true });
    if (this.timeout) clearTimeout(this.timeout);

    this.timeout = setTimeout(() => this.setState({ clicked: false }), 500);
    if (this.props.click) this.props.click();
  }

  render() {
    const {
      className, style, disabled,
      children, text, svg, svgLeft, svgRight,
    } = this.props;

    /* Confirms if there is both svg & text provided */
    const hasTextAndSvg = (svg && text);
    /* Checks for bad user input of no svgPosition with both text/svg -- defaults to left */
    const hasNoPos = (svg && (!svgLeft && !svgRight));
    /* Checks for bad user input of both svgLeft and svgRight -- defaults to left */
    const hasBothPos = (svgLeft && svgRight);

    return (
      <button
        className={this.determineClass()}
        style={style || null}
        onClick={!disabled ? this.clickHandler : null}
      >
        {!children && hasTextAndSvg && (svgLeft || hasBothPos || hasNoPos) &&
          <div className={styles.svgLeft}>
            <span>{svg}</span>
            <p>{text}</p>
          </div>
        }
        {!children && hasTextAndSvg && svgRight &&
          <div className={styles.svgRight}>
            <span>{svg}</span>
            <p>{text}</p>
          </div>
        }
        {!children && !text && svg && <div>{svg}</div>}
        {!children && !svg && <div>{text}</div>}
        {children || null}
      </button>
    );
  }
}
