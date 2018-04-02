import { connect } from 'react-redux';
import App from '../App.jsx';

import {
  toggleAuthorized,
  toggleActive,
  authenticateUser,
} from '../modules/App';

const mapActionCreators = {
  toggleAuthorized,
  toggleActive,
  authenticateUser,
};

const mapStateToProps = (state) => ({
  authorized: state.app.toJS().authorized,
  active: state.app.toJS().active,
});

export default connect(mapStateToProps, mapActionCreators)(App);
