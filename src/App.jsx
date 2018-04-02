import React from 'react';
import PropTypes from 'prop-types';

import { Navbar, Main } from './routes/Home';
import { Auth } from './routes/Auth';

const App = ({
  authorized, active, toggleActive, toggleAuthorized, authenticateUser,
  createUser, error,
}) => {
  return (
    <div>
      <Navbar active={active} toggle={toggleActive} />
      {authorized && <Main />}
      {!authorized &&
        <div>
          <Auth
            authorized={authorized}
            authenticateUser={authenticateUser}
            createUser={createUser}
            error={error}
          />
        </div>
      }
    </div>
  );
};

App.propTypes = {
  authorized: PropTypes.bool.isRequired,
  active: PropTypes.bool.isRequired,
  toggleActive: PropTypes.func.isRequired,
  toggleAuthorized: PropTypes.func.isRequired,
  authenticateUser: PropTypes.func.isRequired,
  createUser: PropTypes.func.isRequired,
  error: PropTypes.shape({
    error: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }),
};

App.defaultProps = {
  error: null,
};

export default App;
