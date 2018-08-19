import React from 'react'
import configureStore from 'redux-mock-store'
import enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProjectsListConnected, { Projects } from '../Projects';
import thunk from '../../../connectors/redux/middleware/thunk';
const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);

enzyme.configure({ adapter: new Adapter() });
let initialState;
let props;
let store;
let wrapper;

describe('Projects', () => {
  beforeEach(() => {
    props = {
      fetchProjects: jest.fn(),
      allProjects: [],
      projectsStatus: 'BUSY',
      filter: 'all',
    }
  });

  it('should call fetchProects', () => {
    mount(<Projects {...props} />)
    expect(props.fetchProjects.mock.calls.length).toBe(1)
  });

  it('should render loading text if projectsStatus is BUSY', () => {
    wrapper = mount(<Projects {...Object.assign({}, props, {projectsStatus: 'BUSY'})} />)
    expect(wrapper.find('h1').text()).toBe('loading...')
  });

  it('should render a list if projectsStatus is not BUSY', () => {
    wrapper = mount(<Projects {...Object.assign({}, props, {projectsStatus: ''})} />)
    expect(wrapper.find('ul')).toHaveLength(1);
  });

  it('should render a list item for every project', () => {
    wrapper = mount(<Projects {...Object.assign(
      {},
      props,
      {
        projectsStatus: 'READY',
        allProjects: [
          {
            title: 'Foo',
            slug: 'foo',
          },
          {
            title: 'Bar',
            slug: 'bar',
          },
        ]
      }
    )} />);

    expect(wrapper.find('li')).toHaveLength(2);
  });
});

describe('ProjectsListConnected', () => {
  initialState = {
    projects: {
      projectsList: [],
      status: 'BUSY',
    },
  };

  props = {
    fetchProjects: jest.fn(),
  }

  beforeEach(()=>{
    store = mockStore(initialState);
    wrapper = mount(<ProjectsListConnected store={store} props={props} /> )
  })

  it('calls fetchProects', () => {
    expect(props.fetchProjects.mock.calls.length).toBe(1)
  });
});
