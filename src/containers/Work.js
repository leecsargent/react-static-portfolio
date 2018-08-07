
import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ projects }) => (
  <div>
    <h1>It's blog time.</h1>
    <br />
    All Projects:
    <ul>
      {projects.map(project => (
        <li key={project.slug}>
          <Link to={`/work/project/${project.id}/`}>{project.title}</Link>
        </li>
      ))}
    </ul>
  </div>
))
