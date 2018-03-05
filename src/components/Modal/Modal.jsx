import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.scss';


export default class Modal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    modalStyle: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ])),
    backdropStyle: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ])),
    modalClass: PropTypes.string,
    backdropClass: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  };

  static defaultProps = {
    modalStyle: null,
    modalClass: null,
    backdropStyle: null,
    backdropClass: null,
  };

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    if (this.props.close) window.addEventListener('keydown', this.listenKeyboard.bind(this), true);
  }

  componentWillUnmount() {
    if (this.props.close) window.removeEventListener('keydown', this.listenKeyboard.bind(this), true);
  }

  listenKeyboard = (event) => {
    const { close } = this.props;
    if (event.key === 'Escape' || event.keyCode === 27) close();
  }

  render() {
    const {
      isOpen, close, modalStyle, backdropStyle,
      modalClass, backdropClass,
    } = this.props;

    if (!isOpen) return null;
    return (
      <div>
        <div className={modalClass || styles.modal} style={modalStyle || null}>
          {this.props.children}
        </div>
        <div
          className={backdropClass || styles.backdrop}
          style={backdropStyle || null}
          onClick={close}
        />
      </div>
    );
  }
}
