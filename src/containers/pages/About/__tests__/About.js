import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

import About from '../About';
import ProjectsListConnected from '../../../Projects';

describe('About', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<About />);

    expect(wrapper.find(ProjectsListConnected)).toHaveLength(1);
  });
});
