import React from 'react'
import { withRouteData, Link } from 'react-static'
import PlaylistSoundPlayer from '../components/Playlist';
import styles from './Music.css';

export default withRouteData(({ playlists }) => (
  <div className={styles.musicContainer}>
    <div>
      <h1>Not Work <span class={styles.headerSpan}>(Music)</span></h1>
      <ul className={styles.musicProjectsList}>
        {playlists.map(playlist => (
          <li key={playlist.slug} className={styles.musicProjectsListItem}>
            <Link to={`/fun/${playlist.slug}/`}>{playlist.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
))
