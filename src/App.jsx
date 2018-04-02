import React from 'react';
import PropTypes from 'prop-types';

import { Navbar, Main } from './routes/Home';
import { Login } from './routes/Auth';

const App = ({
  authorized, active, toggleActive, toggleAuthorized, authenticateUser,
}) => {
  return (
    <div>
      <Navbar active={active} toggle={toggleActive} />
      {authorized && <Main />}
      {!authorized && <div><Login authorized={authorized} authenticateUser={authenticateUser} /></div>}
    </div>
  );
};

App.propTypes = {
  authorized: PropTypes.bool.isRequired,
  active: PropTypes.bool.isRequired,
  toggleActive: PropTypes.func.isRequired,
  toggleAuthorized: PropTypes.func.isRequired,
  authenticateUser: PropTypes.func.isRequired,
};

export default App;
