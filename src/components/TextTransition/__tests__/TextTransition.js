import React from 'react'
import enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TextTransition from '../TextTransition';

enzyme.configure({ adapter: new Adapter() });

describe('TextTransition constructor', () => {
  it('sets state correctly', () => {
    const wrapper = shallow(<TextTransition />);

    expect(wrapper.state().loading).toBe(true);
  });
});

describe('bindAnimationFrameRequest', () => {
  it('sets loading to false', () => {
    const wrapper = shallow(<TextTransition />);
    wrapper.instance().bindAnimationFrameRequest();

    expect(wrapper.state().loading).toBe(false);
  });
})
