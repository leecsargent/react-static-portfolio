import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

import { Home } from '../Home';

describe('Music', () => {
  it('renders correctly', () => {
    const projects = [
      {
        featured: true,
        details: [
          {
            featured: true,
          },
        ],
      },
    ];
    const wrapper = shallow(<Home projects={projects} />);;

    // expect().toHaveLength(1);
  });
});
