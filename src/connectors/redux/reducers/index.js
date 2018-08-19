import { combineReducers } from 'redux'
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
