import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProjects } from '../../connectors/redux/actions/projects';
import {
  selectAllProjects,
  selectProjectsStatus,
} from '../../connectors/redux/selectors/projects';

class Projects extends React.Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  renderProjects() {
    const { allProjects, projectsStatus } = this.props;

    if (projectsStatus === 'BUSY') {
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

const mapStateToProps = (state) => ({
    allProjects: selectAllProjects(state),
    projectsStatus: selectProjectsStatus(state)
});

const mapDispatchToProps = dispatch => (
  {
    fetchProjects: () => dispatch(fetchProjects()),
  }
);

const ProjectsListConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Projects);

Projects.propTypes = {
  fetchProjects: PropTypes.func,
  allProjects: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  projectsStatus: PropTypes.string,
};

Projects.defaultProps = {
  fetchProjects: () => {},
  allProjects: [],
  projectsStatus: 'BUSY',
};

export { Projects };

export default ProjectsListConnected;
