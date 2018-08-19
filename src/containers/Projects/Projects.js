import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../connectors/redux/actions/projects';
import {
  getVisibleProjects,
  getErrorMessage,
  getIsFetching
} from '../../connectors/redux/reducers';

class Projects extends React.Component {
  componentDidMount() {
    const { filter, fetchProjects } = this.props;

    fetchProjects(filter);
  }

  renderProjects() {
    const { allProjects, isFetching } = this.props;

    if (isFetching) {
      return (
        <h1>loading...</h1>
      );
    }

    return (
      <ul className="workProjectsList">
        {allProjects.map(project => (
          <li key={project.slug} className="workProjectsListItem">
            {project.title}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        { this.renderProjects() }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const filter = 'all' // temporary
  return {
    allProjects: getVisibleProjects(state, filter),
    isFetching: getIsFetching(state, filter),
    filter,
  }
};

const ProjectsListConnected = connect(
  mapStateToProps,
  actions,
)(Projects);

Projects.propTypes = {
  allProjects: PropTypes.arrayOf(PropTypes.shape({
    featured: PropTypes.boolean,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  filter: PropTypes.string.isRequired,
  fetchProjects: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export { Projects };

export default ProjectsListConnected;
