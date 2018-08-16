import { createSelector } from 'reselect';

export const getAllProjects = (state) => (state.projects.projectsList);
export const getProjectsStatus = (state) => (state.projects.status);

export const selectAllProjects = createSelector(
  [getAllProjects],
  (projectsList) => projectsList
)

export const selectProjectsStatus = createSelector(
  [getProjectsStatus],
  (projectsStatus) => projectsStatus
)
