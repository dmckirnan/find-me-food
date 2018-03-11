import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';


export default class Login extends Component {
  static propTypes = {
    toggleAuthorized: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  verifyLogin = () => {
    this.props.toggleAuthorized(true);
  };

  render() {
    return (
      <div>
        <input defaultValue="Password" />
        <Button text="SUBMIT" type="GREEN" click={this.verifyLogin} />
      </div>
    );
  }
}
