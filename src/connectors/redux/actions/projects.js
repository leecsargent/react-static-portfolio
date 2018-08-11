import config from '../../../../config';

export const fetchProjects = () =>  {
  return dispatch => {
    dispatch(requestProjects())
    return fetch(`${config.endpoint}/projects`, {})
      .then(response => response.json())
      .then(json => dispatch(fetchProjectsSuccess(json)))
      .catch(error => console.log('error--------------', error));
  }
}

const fetchProjectsSuccess = (projects) => {
  return {
    type: 'FETCH_PROJECTS_SUCCESS',
    payload: projects,
  }
}

const requestProjects = () => {
  return {
    type: 'FETCH_PROJECTS_REQUEST'
  }
}
