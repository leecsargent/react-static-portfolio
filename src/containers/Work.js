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

  .header {
    margin-bottom: 60px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
  }

  .workProjectsList {
    list-style: none;
    padding: 0;
    margin-top: 0;
  }

  .workProjectsListItemFeatured {
    font-size: 24px;
    padding: 8px 0;
  }

  .workProjectsListItemNotFeatured {
    font-size: 18px;
    padding: 8px 0;
  }

  .featured {
    margin-bottom: 50px;
  }

  .subheader {
    margin-bottom: 10px;
    padding-bottom: 10px;
    width: 120px;
    border-bottom: 1px solid #ccc;
  }

  @media (min-width: 768px) {
    .workContainer {
      padding: 60px 0;
    }
  }
`;

export default withRouteData(({ projects }) => (
  <WorkWrapper>
    <div className="workContainer">
      <h1 className="header">Work</h1>
      <h4 className="subheader">Recent</h4>
      <ul className="workProjectsList featured">
        {projects.filter(project => project.featured).map(project => (
          <li key={project.slug} className="workProjectsListItemFeatured">
            <Link to={`/work/${project.slug}/`}>{project.title}</Link>
          </li>
        ))}
      </ul>
      <h4 className="subheader">Less Recent</h4>
      <ul className="workProjectsList">
        {projects.filter(project => !project.featured).map(project => (
          <li key={project.slug} className="workProjectsListItemNotFeatured">
            <Link to={`/work/${project.slug}/`}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  </WorkWrapper>
));
