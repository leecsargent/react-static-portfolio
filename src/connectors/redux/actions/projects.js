import axios from 'axios';
import { projectActionTypes } from '../constants';
import config from '../../../../config';

const {
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_ERROR,
} = projectActionTypes;

export const fetchProjects = (filter) =>  {
  console.log('filter in fetch', filter);
  return dispatch => {
    dispatch(requestProjects())
    return axios.get(`${config.endpoint}/projects`)
      .then(response => dispatch(fetchProjectsSuccess(response.data)))
      .catch(error => dispatch(fetchProjectsError(error)));
  }
}

export const fetchProjectsSuccess = (projects) => {
  return {
    type: FETCH_PROJECTS_SUCCESS,
    payload: projects,
  }
}


export const fetchProjectsError = (error) => {
  return {
    type: FETCH_PROJECTS_ERROR,
    error: error.error,
  }
}

export const requestProjects = () => {
  return {
    type: FETCH_PROJECTS_REQUEST
  }
}
