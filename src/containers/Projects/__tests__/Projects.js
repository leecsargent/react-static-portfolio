import React from 'react'
import configureStore from 'redux-mock-store'
import enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProjectsListConnected, { Projects } from '../Projects';
enzyme.configure({ adapter: new Adapter() });

describe('ProjectsListConnected', () => {
  const initialState = { projects: { allProjects: [] } };
  const mockStore = configureStore();
  let store;
  let wrapper;

  beforeEach(()=>{
    store = mockStore(initialState);
    wrapper = shallow(<ProjectsListConnected store={store} /> )
  })

  it('props match initial state', () => {
    expect(wrapper.prop('allProjects')).toEqual([]);
  });
});

describe('Projects', () => {
  it('calls componentDidMount() lifecycle method', () => {
    const componentDidMountSpy = jest.spyOn(Projects.prototype, 'componentDidMount');
    const wrapper = mount(<Projects />);

    expect(Projects.prototype.componentDidMount).toHaveBeenCalledTimes(1);
  });

  it('returns a list when projectsStatus is not BUSY', () => {
    const list = [];
    const wrapper = shallow(<Projects allProjects={[]} projectsStatus='FOO'/>);

    expect(wrapper.find('ul')).toHaveLength(1);
  });

  it('returns list of all proejcts', () => {
    const list = [];
    const wrapper = shallow(<Projects allProjects={[{slug: 'foo'}, {slug: 'bar'}]} projectsStatus='FOO'/>);

    expect(wrapper.find('li')).toHaveLength(2);
  });

  it('does not return a list when projectsStatus is BUSY', () => {
    const list = [];
    const wrapper = shallow(<Projects allProjects={[]} projectsStatus='BUSY'/>);

    expect(wrapper.find('ul')).toHaveLength(0);
  });
});
