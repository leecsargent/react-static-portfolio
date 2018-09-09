import { combineReducers } from 'redux'
import { createSelector } from 'reselect';
import byId, * as fromById from './byId';
import createProjectsList, * as fromList from './projects';

const projectsListByFilter = combineReducers({
  all: createProjectsList('all'),
  // active: createList('active'),
  // completed: createList('completed'),
});


const projects = combineReducers({
  byId,
  projectsListByFilter,
});

export default projects;

export const getVisibleProjects = (state, filter) => {
  const ids = fromList.getIds(state.projectsListByFilter[filter]);
  return ids.map(id => fromById.getProject(state.byId, id));
};

export const getIsFetching = (state, filter) =>
  fromList.getIsFetching(state.projectsListByFilter[filter]);

export const getAllProjects = (state) => {
  const ids = fromList.getIds(state.projectsListByFilter['all']);
  return ids.map(id => fromById.getProject(state.byId, id));
};

export const getFeaturedProjects = createSelector(
  [getAllProjects],
  (projects) => {
    return projects.filter(project => project.featured);
  }
)

export const getNotFeaturedProjects = createSelector(
  [getAllProjects],
  (projects) => {
    return projects.filter(project => !project.featured);
  }
)
