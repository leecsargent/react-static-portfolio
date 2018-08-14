import React from 'react'
import configureStore from 'redux-mock-store'
import enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProjectsListConnected, { Projects } from '../Projects';
enzyme.configure({ adapter: new Adapter() });

describe('ProjectsListConnected)', () => {
  const initialState = { projects: { projectsList: [] } };
  const mockStore = configureStore();
  let store;
  let container;

  beforeEach(()=>{
    store = mockStore(initialState);
    container = shallow(<ProjectsListConnected store={store} /> )
  })

  it('props match initial state', () => {
    expect(container.prop('projectsList')).toEqual([]);
  });
});


describe('Projects', () => {
  it('calls componentDidMount() lifecycle method', () => {
    const componentDidMountSpy = jest.spyOn(Projects.prototype, 'componentDidMount');
    const wrapper = mount(<Projects />);

    expect(Projects.prototype.componentDidMount).toHaveBeenCalledTimes(1);
  });

  it('returns a list when status is not BUSY', () => {
    const list = [];
    const wrapper = shallow(<Projects projectsList={[]} status='FOO'/>);

    expect(wrapper.find('ul')).toHaveLength(1);
  });

  it('does not return a list when status is BUSY', () => {
    const list = [];
    const wrapper = shallow(<Projects projectsList={[]} status='BUSY'/>);

    expect(wrapper.find('ul')).toHaveLength(0);
  });

  it('returns a list with with an li for each item in projectList', () => {
    const list = [];
    const wrapper = shallow(<Projects projectsList={[{'slug': 'foo'}]} status='FOO'/>);

    expect(wrapper.find('li')).toHaveLength(1);
  });
})
