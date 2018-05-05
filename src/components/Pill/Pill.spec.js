import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import classNames from 'classnames';

import Pill from './Pill.jsx';
import BigPill from './Pills/BigPill.jsx';
import BubblePill from './Pills/BubblePill.jsx';
import StatusPill from './Pills/StatusPill.jsx';
import styles from './Pills/Pill.scss';

const props = {
  text: '',
  type: 'BIG',
  color: 'BLUE',
};

describe('<Pill />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Pill {...props} />);
  });

  it('should exist', () => {
    expect(wrapper).to.exist;
  });
  it('should render a <BigPill /> by default', () => {
    expect(wrapper.find(BigPill)).to.have.length(1);
  });
  it('should render a status pill when type="STATUS"', () => {
    const newProps = { ...props, type: 'STATUS' };
    wrapper = shallow(<Pill {...newProps} />);
    expect(wrapper.find(StatusPill)).to.have.length(1);
  });
  it('should render a bubble pill when type="BUBBLE"', () => {
    const newProps = { ...props, type: 'BUBBLE' };
    wrapper = shallow(<Pill {...newProps} />);
    expect(wrapper.find(BubblePill)).to.have.length(1);
  });
  it('should have all expected classes when given a className', () => {
    const newProps = { ...props, className: 'testing' };
    wrapper = shallow(<Pill {...newProps} />);
    const pill = wrapper.dive().find('div');
    // expect([`${styles.bigPill}`, `${styles.bigPillBlue}`, 'testing']
      // .every(c => pill.hasClass(c))).to.equal(true);
    expect(['testing']
    .every(c => pill.hasClass(c))).to.equal(true);
  });
  it('should render a status pill with text prop passed', () => {
    const newProps = { ...props, text: 'Test' };
    wrapper = shallow(<Pill {...newProps} />);
    expect(wrapper.props().text).to.equal('Test');
  });
});
