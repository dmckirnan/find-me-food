import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { text, onClick } = this.props;

    return (
      <button
        onClick={onClick}
        style={{
          width: '100px', border: '1px solid blue', borderRadius: '60px', fontSize: '12px', height: '32px'
        }}
      >
        {text}
      </button>
    );
  }
}
