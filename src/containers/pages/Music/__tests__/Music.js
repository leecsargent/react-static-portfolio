import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

import { Music } from '../Music';

describe('Music', () => {
  it('renders correctly', () => {
    const playlists = [{slug: 'foo'}, {slug: 'bar'}];
    const wrapper = shallow(<Music playlists={playlists} />);;

    expect(wrapper.find('li')).toHaveLength(2);
  });
});
