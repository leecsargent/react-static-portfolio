import React from 'react'
import { withRouteData, Link } from 'react-static'
import PlaylistSoundPlayer from '../components/Playlist';

export default withRouteData(({ playlists }) => (
  <div className="work-list-container">
    <div>
      <h1>Projects:</h1>
      <ul className="projects-list">
        {playlists.map(playlist => (
          <li key={playlist.slug} className="projects-list-item">
            <Link to={`/fun/${playlist.slug}/`}>{playlist.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
))
