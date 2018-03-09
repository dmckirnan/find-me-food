import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Button from './Button.jsx';

/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */

describe('<Button />', () => {
  it('should be a button element', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.type()).to.eql('button');
  });
});
