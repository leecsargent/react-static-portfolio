import React from 'react';
import { withRouteData, Link } from 'react-static';

import styles from './Work.css';

export default withRouteData(({ projects }) => (
  <div className={styles.workContainer}>
    <h1>Work</h1>
    <ul className={styles.workProjectsList}>
      {projects.map(project => (
        <li key={project.slug} className={styles.workProjectsListItem}>
          <Link to={`/work/${project.slug}/`}>{project.title}</Link>
        </li>
      ))}
    </ul>
  </div>
))
