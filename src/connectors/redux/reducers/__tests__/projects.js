import projectsReducer from '../projects';
import { projectActionTypes } from '../../constants';

describe('projects reducer', () => {
  it('should return the initial state', () => {
    expect(projectsReducer(undefined, {})).toEqual({
        projectsList: [],
        status: 'BUSY',
      }
    )
  });

  it('should handle FETCH_PROJECTS_REQUEST', () => {
    expect(
      projectsReducer({}, {
        type: projectActionTypes.FETCH_PROJECTS_REQUEST,
      })
    ).toEqual({
        status: 'BUSY',
      }
    );
  });

  it('should handle FETCH_PROJECTS_SUCCESS', () => {
    expect(
      projectsReducer({}, {
        type: projectActionTypes.FETCH_PROJECTS_SUCCESS,
        payload: [
          {
            foo: 'bar',
          }
        ]
      })
    ).toEqual({
        projectsList: [
          {
            foo: 'bar',
          }
        ],
        status: 'READY',
      }
    )
  });
})
