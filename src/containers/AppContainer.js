import { connect } from 'react-redux';
import App from '../App.jsx';

import {
  toggleAuthorized,
  toggleActive,
  authenticateUser,
  createUser,
} from '../modules/App';

const mapActionCreators = {
  toggleAuthorized,
  toggleActive,
  authenticateUser,
  createUser,
};

const mapStateToProps = (state) => ({
  authorized: state.app.toJS().authorized,
  active: state.app.toJS().active,
  error: state.app.toJS().error,
});

export default connect(mapStateToProps, mapActionCreators)(App);
