import React from 'react'
import { withSiteData } from 'react-static'
import PlaylistSoundPlayer from '../components/Playlist';

const clientId = '77ed62a445e34fcc90617a4335460d6c';
const resolveUrl = 'https://soundcloud.com/leesargent/sets/modern-pictures';

export default withSiteData(() => (
  <div className="music-container">
    <div>
      <h1>Music</h1>
        <PlaylistSoundPlayer
          clientId={clientId}
          resolveUrl={resolveUrl}
        />
    </div>
  </div>
))
