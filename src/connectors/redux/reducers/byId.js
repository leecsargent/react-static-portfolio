import { projectActionTypes } from '../constants';
const {
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_ERROR,
} = projectActionTypes;

const byId = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PROJECTS_SUCCESS:
      const nextState = { ...state };
      action.payload.forEach(project => {
        nextState[project._id] = project;
      });
      return nextState;
    default:
      return state;
  }
};

export default byId;

export const getProject = (state, _id) => state[_id];
