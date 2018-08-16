import React from 'react'
import enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as actionTypes from '../projects';
enzyme.configure({ adapter: new Adapter() });

describe('fetchProjectsSuccess', () => {
  it('returns the expected action', () => {
    expect(actionTypes.fetchProjectsSuccess({foo: 'bar'})).toEqual(
      {
        type: 'FETCH_PROJECTS_SUCCESS',
        payload: {foo: 'bar'},
      }
    )
  });
});

describe('requestProjects', () => {
  it('returns the expected action', () => {
    expect(actionTypes.requestProjects()).toEqual(
      {
        type: 'FETCH_PROJECTS_REQUEST',
      }
    )
  })
});
