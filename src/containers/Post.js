import React from 'react'
import { withRouteData, Link } from 'react-static'
import styles from './Post.css'

export default withRouteData(({ project }) => {
  return (
    <div className={styles.projectContainer}>
      <h3>{project.title}</h3>
      <p className={styles.projectDescription}>{project.description}</p>
      <ul className={styles.projectDetailsList}>
      {
        project.details && project.details.map((detail, index) => {
          return (
            <li key={ index } className={styles.projectListItem}>
              <img className={styles.projectDetailImage} src={detail.image} />
              <p className={styles.projectDetailText}>{detail.detailText}</p>
            </li>
          );
        })
      }
      </ul>
    </div>
  )
})
