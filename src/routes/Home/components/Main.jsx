import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Button from 'components/Button';
import Home from './Home.jsx';

const Main = () =>
  (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </main>
  );

export default Main;
