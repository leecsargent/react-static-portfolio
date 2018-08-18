import React from 'react'
import configureMockStore from 'redux-mock-store'
import enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockAxios from 'axios';
import * as actions from '../projects';
import { projectActionTypes } from '../../constants';
import thunk from '../../middleware/thunk';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const {
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCESS,
} = projectActionTypes;

enzyme.configure({ adapter: new Adapter() });

describe('fetchProjectsSuccess', () => {
  it('returns the expected action', () => {
    expect(actions.fetchProjectsSuccess({foo: 'bar'})).toEqual(
      {
        type: FETCH_PROJECTS_SUCCESS,
        payload: {foo: 'bar'},
      }
    )
  });
});

describe('requestProjects', () => {
  it('returns the expected action', () => {
    expect(actions.requestProjects()).toEqual(
      {
        type: FETCH_PROJECTS_REQUEST,
      }
    )
  })
});

describe('async actions', () => {
  it('creates FETCH_PROJECTS_SUCCESS', () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: { projects: [] }
      })
    );

    const expectedActions = [
      {
        type: projectActionTypes.FETCH_PROJECTS_REQUEST
      },
      {
        type: projectActionTypes.FETCH_PROJECTS_SUCCESS,
        payload: {
          projects: []
        }
      },
    ]
    const store = mockStore({ projects: [] })

    return store.dispatch(actions.fetchProjects()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  });

  it('creates FETCH_PROJECTS_ERROR', () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.reject({
        error: { message: 'some error' }
      })
    );

    const expectedActions = [
      {
        type: projectActionTypes.FETCH_PROJECTS_REQUEST
      },
      {
        type: projectActionTypes.FETCH_PROJECTS_ERROR,
        error: {
          message: 'some error',
        },
      },
    ];
    const store = mockStore({ projects: [] });

    return store.dispatch(actions.fetchProjects()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    });
  });
})
