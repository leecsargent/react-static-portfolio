import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ project }) => {
  console.log('project', project)
  return (
    <div>
      <Link to="/work/">{'<'} Back</Link>
      <br />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <pre>{JSON.stringify(project)}</pre>
    </div>
  )
})
