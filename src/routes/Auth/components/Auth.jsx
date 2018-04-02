import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import styles from './Auth.scss';


export default class Auth extends Component {
  static propTypes = {
    authenticateUser: PropTypes.func.isRequired,
    createUser: PropTypes.func.isRequired,
    error: PropTypes.shape({
      error: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    }),
  };

  static defaultProps = {
    error: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      login: true,
      create: false,
    };
  }

  toggleLogin = () => {
    this.setState({ login: true, create: false });
  }

  toggleCreate = () => {
    this.setState({ create: true, login: false });
  }

  verifyLogin = () => {
    const { username, password } = this.state;
    this.props.authenticateUser(username, password);
  };

  handleCreate = () => {
    const { username, password } = this.state;
    this.props.createUser(username, password);
  }

  handleUsername = ({ target: { value } }) => {
    return this.setState({ username: value });
  }

  handlePassword = ({ target: { value } }) => {
    return this.setState({ password: value });
  }

  render() {
    return (
      <div className={styles.loginContainer}>
        <div className={styles.formContainer}>
          {this.state.login &&
            <div>
              <input defaultValue="Username" onChange={this.handleUsername} />
              <input defaultValue="Password" onChange={this.handlePassword} />
              <Button text="SUBMIT" type="GREEN" click={this.verifyLogin} />
              {this.props.error && <p>{this.props.error.message}</p>}
            </div>}
          {this.state.create &&
            <div>
              <input defaultValue="Username" onChange={this.handleUsername} />
              <input defaultValue="Password" onChange={this.handlePassword} />
              <Button text="SUBMIT" type="BLUE" click={this.handleCreate} />
              {this.props.error && <p>{this.props.error.message}</p>}
            </div>}
        </div>
        <div className={styles.toggleContainer}>
          <button onClick={this.toggleLogin}>Login</button>
          <button onClick={this.toggleCreate}>Create</button>
        </div>
      </div>
    );
  }
}
