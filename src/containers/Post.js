import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ project }) => (
  <div>
    <Link to="/work/">{'<'} Back</Link>
    <br />
    <h3>{project.title}</h3>
    <p>{project.body}</p>
  </div>
))
