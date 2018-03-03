import React from 'react';
import PropTypes from 'prop-types';

import { Navbar, Main } from './routes/Home';
import { Login } from './routes/Auth';

const App = () =>
  (
    <div>
      <Login />
      <Navbar />
      <Main />
    </div>
  );

export default App;
