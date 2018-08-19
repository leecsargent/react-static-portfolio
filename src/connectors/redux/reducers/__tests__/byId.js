import byId from '../byId';
import { projectActionTypes } from '../../constants';

const {
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCESS,
} = projectActionTypes;

describe('listReducer reducer', () => {
  it('should return the initial state', () => {
    expect(byId(undefined, {})).toEqual({});
  });

  it('should handle FETCH_PROJECTS_SUCCESS', () => {
    expect(
      byId({}, {
        type: FETCH_PROJECTS_SUCCESS,
        payload: [
          {
            _id: '0'
          },
          {
            _id: '1'
          }]
      })
    ).toEqual({
        '0': {
          _id: '0'
        },
        '1': {
          _id: '1'
        },
      },
    );
  });
})
