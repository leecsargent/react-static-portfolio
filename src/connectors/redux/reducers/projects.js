import { combineReducers } from 'redux';
import { projectActionTypes } from '../constants';
const {
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_ERROR,
} = projectActionTypes;

const createProjectsList = (filter) => {
  const ids = (state = [], action) => {
    switch (action.type) {
      case FETCH_PROJECTS_SUCCESS:
        return filter === action.filter ?
          action.payload.map(project => project._id) :
          state;
      default:
        return state;
    }
  };

  const isFetching = (state = false, action) => {
    if (filter !== action.filter) {
      return state;
    }
    switch (action.type) {
      case FETCH_PROJECTS_REQUEST:
        return true;
      case FETCH_PROJECTS_SUCCESS:
      case FETCH_PROJECTS_ERROR:
        return false;
      default:
        return state;
    }
  };

  return combineReducers({
    ids,
    isFetching,
  });
};

export default createProjectsList;

export const getIds = (state) => state.ids;
export const getIsFetching = (state) => state.isFetching;
