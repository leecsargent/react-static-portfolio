import createProjectsList from '../projects';
import { projectActionTypes } from '../../constants';
import * as selectors from '../index';

const {
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCESS,
} = projectActionTypes;

describe('createProjectsList', () => {
  const filter = 'all';
  const projectsList = createProjectsList(filter);

  it('creates a reducer', () => {
    expect(projectsList).not.toBe(null);
  });

  it('handles FETCH_PROJECTS_SUCCESS with a filter', () => {
    expect(
      projectsList(
        {},
        {
          payload: [{_id: '1'}, {_id: '2'}],
          type: FETCH_PROJECTS_SUCCESS,
          filter,
        }
      )
    ).toEqual({
      ids: [
        '1',
        '2',
      ],
      isFetching: false,
    });
  });
  it('handles FETCH_PROJECTS_SUCCESS without a filter', () => {
    expect(
      projectsList(
        {},
        {
          payload: [{_id: '1'}, {_id: '2'}],
          type: FETCH_PROJECTS_SUCCESS,
        }
      )
    ).toEqual({
      ids: [],
      isFetching: false,
    });
  });

  it('handles FETCH_PROJECTS_REQUEST', () => {
    expect(
      projectsList(
        {},
        {
          type: FETCH_PROJECTS_REQUEST,
          filter,
        }
      )
    ).toEqual({
      ids: [],
      isFetching: true,
    });
  })

  it('returns default state', () => {
    expect(
      projectsList(
        undefined,
        {
          type: 'foo',
          filter,
        }
      )
    ).toEqual({
      ids: [],
      isFetching: false,
    });
  })
})
