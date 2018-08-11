import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchProjects } from '../connectors/redux/actions/projects';

class Projects extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  renderProjects() {
    const { projectsList, status } = this.props;
    if (status === 'BUSY') {
      return (
        <h1>loading...</h1>
      )
    }

    return (
      <ul className="workProjectsList">
        {projectsList.map(project => (
          <li key={project.slug} className="workProjectsListItem">
            {project.title}
          </li>
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div>
        { this.renderProjects() }
      </div>
    )
  }
}

const mapStateToProps = (
  {
    projects: {
      projectsList,
      status,
    }
  }
) => (
  {
    projectsList,
    status
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    fetchProjects: () => dispatch(fetchProjects()),
  }
)

const ProjectsListConnected = connect(mapStateToProps, mapDispatchToProps)(Projects);

const About = () => (
  <div>
    <ProjectsListConnected />
  </div>
)

export { ProjectsListConnected }
export default About
