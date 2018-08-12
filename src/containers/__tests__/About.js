import React from 'react'
import configureStore from 'redux-mock-store'
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ProjectsListConnected } from '../About';
enzyme.configure({ adapter: new Adapter() });

describe('>>>H O M E --- REACT-REDUX (Shallow + passing the {store} directly)',()=>{
  const initialState = {projects: {projectsList: []}}
  const mockStore = configureStore()
  let store;
  let container;

  beforeEach(()=>{
    store = mockStore(initialState);
    container = shallow(<ProjectsListConnected store={store} /> )
  })

  it('props match initial state', () => {
    expect(container.prop('projectsList')).toEqual([])
  });
});
