import axios from 'axios';
import { projectActionTypes } from '../constants';
import config from '../../../../config';

const {
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_ERROR,
} = projectActionTypes;

export const fetchProjects = (filter) =>  {
  return dispatch => {
    dispatch(requestProjects(filter))
    return axios.get(`${config.endpoint}/projects`)
      .then(response => dispatch(fetchProjectsSuccess(response.data, filter)))
      .catch(error => dispatch(fetchProjectsError(error)));
  }
}

export const fetchProjectsSuccess = (projects, filter) => {
  return {
    type: FETCH_PROJECTS_SUCCESS,
    payload: projects,
    filter,
  }
}


export const fetchProjectsError = (error) => {
  return {
    type: FETCH_PROJECTS_ERROR,
    error: error.error,
  }
}

export const requestProjects = (filter) => {
  return {
    type: FETCH_PROJECTS_REQUEST,
    filter
  }
}
