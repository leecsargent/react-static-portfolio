import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

import { PlaylistConatiner, PlaylistWrapper } from '../Playlist';

describe('Playlist', () => {
  it('renders correctly', () => {
    const playlist = {slug: 'foo'}
    const wrapper = shallow(<PlaylistConatiner playlist={playlist} />);

    expect(wrapper.find(PlaylistWrapper)).toHaveLength(1);
  });
});
