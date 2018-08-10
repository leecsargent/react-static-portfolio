import React from 'react';
import { withRouteData, Link } from 'react-static';
import styled from 'styled-components';
const WorkWrapper = styled.div`
  .workContainer {
    max-width: 500px;
    padding: 60px 20px;
    margin: 0 auto;
    box-sizing: border-box;
  }
  .workProjectsList {
    list-style: none;
    padding: 0;
  }

  .workProjectsListItem {
    font-size: 24px;
    padding: 12px 0;
  }

  @media (min-width: 768px) {
    .workContainer {
      padding: 60px 0;
    }
  }
`

export default withRouteData(({ projects }) => (
  <WorkWrapper>
    <div className="workContainer">
      <h1>Work</h1>
      <ul className="workProjectsList">
        {projects.map(project => (
          <li key={project.slug} className="workProjectsListItem">
            <Link to={`/work/${project.slug}/`}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  </WorkWrapper>
))
