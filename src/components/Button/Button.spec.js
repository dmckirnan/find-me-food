import React from 'react';

import Button from './Button.jsx';
import styles from './Button.scss';

const props = {
  click: () => {},
  text: '',
  type: null,
  style: null,
  className: null,
  disabled: false,
  svgLeft: false,
  svgRight: false,
  svg: null,
};

describe('<Button />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Button {...props} />);
  });

  it('should exist', () => {
    expect(wrapper).to.exist;
  });
  it('should have expected default state', () => {
    expect(wrapper.state()).to.deep.equal({ clicked: false });
  });
  it('should call determineClass on render', () => {
    const component = wrapper.instance();
    const classSpy = sinon.spy(component, 'determineClass');
    component.forceUpdate();
    wrapper.update();
    expect(classSpy.callCount).to.equal(1);
    classSpy.restore();
  });
  it('should call clickHandler when clicked', () => {
    const component = wrapper.instance();
    const handlerSpy = sinon.spy(component, 'clickHandler');
    component.forceUpdate();
    wrapper.update();
    wrapper.find('button').simulate('click');
    expect(handlerSpy.callCount).to.equal(1);
    handlerSpy.restore();
  });
  it('should call click if click exists when clicked', () => {
    const clickSpy = sinon.spy(props, 'click');
    wrapper = mount(<Button {...props} />);
    wrapper.find('button').simulate('click');
    expect(clickSpy.calledOnce).to.equal(true);
    clickSpy.restore();
  });
  it('should not call click if click doesnt exist when clicked', () => {
    const clickSpy = sinon.spy(props, 'click');
    const newProps = {...props, click: null };
    wrapper = mount(<Button {...newProps} />);
    wrapper.find('button').simulate('click');
    expect(clickSpy.calledOnce).to.equal(false);
    clickSpy.restore();
  });
  it('should not call click when disabled is true', () => {
    const clickSpy = sinon.spy(props, 'click');
    const newProps = { ...props, disabled: true };
    wrapper = mount(<Button {...newProps} />);
    wrapper.find('button').simulate('click');
    expect(clickSpy.calledOnce).to.equal(false);
    clickSpy.restore();
  });
  it('should have the expected text when passed text', () => {
    const newProps = { ...props, text: 'Test-Btn'};
    wrapper = mount(<Button {...newProps} />);
    expect(wrapper.props().text).to.equal('Test-Btn');
  });
  it('should have the given className provided in props', () => {
    const newProps = { ...props, className: 'test-name' };
    wrapper = mount(<Button { ...newProps} />);
    expect(wrapper.props().className).to.equal('test-name');
  });

  describe('Button Type Results', () => {
    it('should render blue button when passed BLUE', () => {
      const newProps = { ...props, type: 'BLUE' };
      wrapper = mount(<Button {...newProps} />);
      const button = wrapper.find('button');
      expect(wrapper.find('button')).to.have.length(1);
      expect(button.hasClass('reusable-blue-button'));
      expect(button.hasClass('reusable-button'))
    });
    it('should render red button when passed RED', () => {
      const newProps = { ...props, type: 'RED' };
      wrapper = mount(<Button {...newProps} />);
      const button = wrapper.find('button');
      expect(button.hasClass(`${styles.reusableButton}`));
      expect(button.hasClass(`${styles.reusableRedButton}`));
    });
    it('should render green button when passed GREEN', () => {
      const newProps = { ...props, type: 'GREEN' };
      wrapper = mount(<Button {...newProps} />);
      const button = wrapper.find('button');
      expect(button.hasClass(`${styles.reusableButton}`));
      expect(button.hasClass(`${styles.reusableGreenButton}`));
    });
    it('should render white-blue button when passed WHITE_BLUE', () => {
      const newProps = { ...props, type: 'WHITE_BLUE' };
      wrapper = mount(<Button {...newProps} />);
      const button = wrapper.find('button');
      expect(button.hasClass(`${styles.reusableButton}`));
      expect(button.hasClass(`${styles.reusableWhiteBlueButton}`));
    });
    it('should render white-red button when passed WHITE_RED', () => {
      const newProps = { ...props, type: 'WHITE_RED' };
      wrapper = mount(<Button {...newProps} />);
      const button = wrapper.find('button');
      expect(button.hasClass(`${styles.reusableButton}`));
      expect(button.hasClass(`${styles.reusableWhiteRedButton}`));
    });
    it('should render white-green button when passed WHITE_GREEN', () => {
      const newProps = { ...props, type: 'WHITE_GREEN' };
      wrapper = mount(<Button {...newProps} />);
      const button = wrapper.find('button');
      expect(button.hasClass(`${styles.reusableButton}`));
      expect(button.hasClass(`${styles.reusableWhiteGreenButton}`));
    });
  });

  describe('determineClass scenarios', () => {
    it('should render proper classes when passed a type and a color', () => {
      const newProps = { ...props, className: 'test', type: 'WHITE_GREEN' };
      wrapper = mount(<Button {...newProps} />);
      const button = wrapper.find('button');
      expect(button.hasClass(`${styles.reusableButton}`));
      expect(button.hasClass(`${styles.reusableWhiteGreenButton}`));
      expect(button.hasClass('test'));
    });
    it('should render only render type class even when passed other things', () => {
      const newProps = { ...props, className: 'test', type: 'WHITE_GREEN', disabled: true };
      wrapper = mount(<Button {...newProps} />);
      const button = wrapper.find('button');
      expect(button.hasClass(`${styles.reusableDisabledButton}`));
      expect(button.hasClass('test'));
      expect(button.hasClass(`${styles.reusableWhiteGreenButton}`)).to.equal(false);
    });
    it('should only render reusableButton class if type is BLUE', () => {
      const newProps = { ...props, type: 'BLUE' };
      wrapper = mount(<Button {...newProps} />);
      const button = wrapper.find('button');
      expect(button.hasClass(`${styles.reusableButton}`));
    });
    it('should render all classNames if type is not BLUE', () => {
      const newProps = { ...props, className: 'test', type: 'WHITE_GREEN' };
      wrapper = mount(<Button {...newProps} />);
      const button = wrapper.find('button');
      expect(button.hasClass(`${styles.reusableButton}`));
      expect(button.hasClass(`${styles.reusableWhiteGreenButton}`));
      expect(button.hasClass('test'));
    });
    it('should render animate class if clicked state true', () => {
      const newProps = { ...props, className: 'test', type: 'WHITE_GREEN' };
      wrapper = mount(<Button {...newProps} />);
      wrapper.setState({ clicked: true });
      const button = wrapper.find('button');
      setTimeout(() => {
        expect([`${styles.reusableButton}`, `${styles.reusableWhiteGreenButton}`, 'test', `${styles.animate}`]
        .every(c => button.hasClass(c))).to.equal(true);
      }, 100);
    });
  });
});
