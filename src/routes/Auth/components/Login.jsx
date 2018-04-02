import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';


export default class Login extends Component {
  static propTypes = {
    authenticateUser: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  verifyLogin = () => {
    const { username, password } = this.state;
    this.props.authenticateUser(username, password);
  };

  handleUsername = ({ target: { value } }) => {
    return this.setState({ username: value });
  }

  handlePassword = ({ target: { value } }) => {
    return this.setState({ password: value });
  }

  render() {
    return (
      <div>
        <input defaultValue="Username" onChange={this.handleUsername} />
        <input defaultValue="Password" onChange={this.handlePassword} />
        <Button text="SUBMIT" type="GREEN" click={this.verifyLogin} />
      </div>
    );
  }
}
