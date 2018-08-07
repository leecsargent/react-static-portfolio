import React from 'react'
import { withRouteData, Link } from 'react-static'

export default withRouteData(({ project }) => {
  return (
    <div className="project-container">
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <ul className="project-details-list">
      {
        project.details && project.details.map((detail, index) => {
          return (
            <li key={ index } className="project-list-item">
              <img className="project-detail-image" src={detail.image} />
              <p className="project-detail-text">{detail.detailText}</p>
            </li>
          );
        })
      }
      </ul>
    </div>
  )
})
