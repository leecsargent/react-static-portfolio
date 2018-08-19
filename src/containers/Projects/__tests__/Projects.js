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
      isFetching: true,
      filter: 'all',
    }
  });

  it('should call fetchProjects', () => {
    mount(<Projects {...props} />)
    expect(props.fetchProjects.mock.calls.length).toBe(1)
  });

  it('should render loading text if isFetching is BUSY', () => {
    wrapper = mount(<Projects {...Object.assign({}, props, {isFetching: true})} />)
    expect(wrapper.find('h1').text()).toBe('loading...')
  });

  it('should render a list if isFetching is not BUSY', () => {
    wrapper = mount(<Projects {...Object.assign({}, props, {isFetching: false})} />)
    expect(wrapper.find('ul')).toHaveLength(1);
  });

  it('should render a list item for every project', () => {
    wrapper = mount(<Projects {...Object.assign(
      {},
      props,
      {
        isFetching: false,
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
    byId: {
      '1' : {
        _id: '1',
        slug: 'one',
        title: 'One',
      },
    },
    projectsListByFilter: {
      all: {
        ids: ['1'],
        isFetching: false,
      },
    },
  };

  props = {
    fetchProjects: jest.fn(),
  }

  beforeEach(()=>{
    store = mockStore(initialState);
    wrapper = mount(<ProjectsListConnected store={store} props={props} /> )
  })

  it('calls fetchProjects', () => {
    expect(props.fetchProjects.mock.calls.length).toBe(1)
  });
});
