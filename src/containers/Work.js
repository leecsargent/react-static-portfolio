
import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ projects }) => (
  <div className="work-list-container">
    <div>
      <h1>Projects:</h1>
      <ul className="projects-list">
        {projects.map(project => (
          <li key={project.slug} className="projects-list-item">
            <Link to={`/work/project/${project.slug}/`}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
))
