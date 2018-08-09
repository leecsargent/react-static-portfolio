import React from 'react';
import { withRouteData, Link } from 'react-static';
import Playlist from '../components/Playlist';
import styles from './Playlist.css';

const clientId = '77ed62a445e34fcc90617a4335460d6c';
const url = 'https://soundcloud.com/leesargent/sets/';

export default withRouteData(({ playlist }) => {
  let urlArray = [url];
  let resolveUrl;

  urlArray.push(playlist.slug);
  resolveUrl = urlArray.join('');

  return (
    <div className={styles.playlistContainer}>
      <Playlist
        clientId={clientId}
        resolveUrl={resolveUrl}
        />
    </div>
  )
})
