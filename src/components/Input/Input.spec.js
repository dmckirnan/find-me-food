import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import classNames from 'classnames';

import Input from './Input.jsx';
import styles from './Input.scss';

const props = {
  onChange: () => {},
  hasErorr: null,
  error: null,
  disabled: false,
  className: null,
  divClass: null,
  value: null,
  placeholder: null,
  label: null,
};

describe('<Input />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Input {...props} />);
  });

  it('should exist', () => {
    expect(wrapper).to.exist;
  });
  it('should call onChange when change occurs', () => {
    const changeSpy = sinon.spy(props, 'onChange');
    wrapper = mount(<Input {...props} />);
    const event = { target: { name: 'input', value: 'test' }};
    wrapper.find(`.${styles.input}`).simulate('change', event);
    expect(changeSpy.calledOnce).to.equal(true);
    changeSpy.restore();
  });
  it('should have error style when hasError & error true', () => {
    const newProps = { ...props, hasError: true, error: 'test' };
    wrapper = mount(<Input { ...newProps} />);
    const input = wrapper.find('input');
    expect([`${styles.input}`, `${styles.error}`]
      .every(c => input.hasClass(c))).to.equal(true);
  });
  it('should have disabled style when disabled true', () => {
    const newProps = { ...props, disabled: true };
    wrapper = mount(<Input { ...newProps} />);
    const input = wrapper.find('input');
    expect([`${styles.input}`, `${styles.disabled}`]
      .every(c => input.hasClass(c))).to.equal(true);
  });
  it('should not render errorText if error is null even if hasError true', () => {
    const newProps = { ...props, hasError: true };
    wrapper = mount(<Input { ...newProps} />);
    expect(wrapper.find(`.${styles.errorText}`)).to.have.length(0);
  });
  it('should not render errorText if hasError is false', () => {
    expect(wrapper.find(`.${styles.errorText}`)).to.have.length(0);
  });
  it('should not render errorText if disabled is true but error flags are true also', () => {
    const newProps = { ...props, disabled: true };
    wrapper = mount(<Input { ...newProps} />);
    expect(wrapper.find(`.${styles.errorText}`)).to.have.length(0);
  });
  it('should render an input label if label is true', () => {
    const newProps = { ...props, label: 'test' };
    wrapper = mount(<Input { ...newProps} />);
    expect(wrapper.find('p').hasClass(`${styles.inputLabel}`));
    expect(wrapper.find('p').hasClass(`${styles.labelDisabled}`)).to.equal(false);
  });
  it('should render a disabled label if disabled is true and label true', () => {
    const newProps = { ...props, disabled: true, label: 'test' };
    wrapper = mount(<Input { ...newProps} />);
    expect(wrapper.find('p').hasClass(`${styles.inputLabel}`)).to.equal(false);
    expect(wrapper.find('p').hasClass(`${styles.labelDisabled}`));
  });
  it('should have the given className provided in props', () => {
    const newProps = { ...props, className: 'test-name' };
    wrapper = mount(<Input { ...newProps} />);
    expect(wrapper.props().className).to.equal('test-name');
    expect(wrapper.find('input').hasClass('test-name'));
  });
  it('should have given divClass provided in props', () => {
    const newProps = { ...props, divClass: 'test-name' };
    wrapper = mount(<Input { ...newProps} />);
    expect(wrapper.props().divClass).to.equal('test-name');
    expect(wrapper.find('.test-name')).to.have.length(1);
  });
});
