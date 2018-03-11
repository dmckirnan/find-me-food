import { connect } from 'react-redux';
import App from '../App.jsx';

import {
  toggleAuthorized,
  toggleActive,
} from '../modules/App';

const mapActionCreators = {
  toggleAuthorized,
  toggleActive,
};

const mapStateToProps = (state) => ({
  authorized: state.app.toJS().authorized,
  active: state.app.toJS().active,
});

export default connect(mapStateToProps, mapActionCreators)(App);
