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

const mapStateToProps = (state) => {
  return {
    authorized: state.app.authorized,
    active: state.app.active,
  };
};

export default connect(mapStateToProps, mapActionCreators)(App);
