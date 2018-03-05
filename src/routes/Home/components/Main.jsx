import React from 'react';
import Button from 'components/Button';

import Home from './Home.jsx';

const Main = () =>
  (
    <div>
      <Home />
      <Button
        onClick={() => 'hi'}
        text="Test"
        reactKey="test-button"
      />
    </div>
  );

export default Main;
