import React from 'react'
import configureStore from 'redux-mock-store'
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CounterConnected } from '../../src/containers/About';
enzyme.configure({ adapter: new Adapter() });

describe('>>>H O M E --- REACT-REDUX (Shallow + passing the {store} directly)',()=>{
  const initialState = {counter: {count: 0}}
  const mockStore = configureStore()
  let store,container

  beforeEach(()=>{
    store = mockStore(initialState);
    container = shallow(<CounterConnected store={store} /> )
  })

  it('props match initial state', () => {
    expect(container.prop('count')).toEqual(0)
  });
});
