import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

import { Home } from '../Home';

const featuredProject = {
  createdAt: '2018-08-18T18:30:18.845Z',
  details: [
    {
      featured: true,
      image: 'path/to/image',
    },
    {
      detailText: 'bar',
    },
  ],
  featured: true,
};

const notFeaturedProject = {
  createdAt: '2017-08-18T18:30:18.845Z',
  details: [
    {
      detailText: 'foo',
    },
  ],
};

const projects = [
  featuredProject,
  notFeaturedProject,
];

describe('Music', () => {
  it('renders correctly', () => {

    const wrapper = shallow(<Home projects={projects} />);;

    expect(wrapper.find('.subheader')).toHaveLength(1);
  });
});
