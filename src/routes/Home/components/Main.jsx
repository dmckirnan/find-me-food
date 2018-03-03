import React from 'react';
import Button from 'components/Button';

import Home from './Home.jsx';

const Main = () =>
  (
    <div>
      <Home />
      <Button onClick={() => console.log('hi')} text={'fuck'} />
    </div>
  );

export default Main;
