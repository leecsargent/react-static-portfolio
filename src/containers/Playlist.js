import React from 'react';
import { withRouteData, Link } from 'react-static';
import Playlist from '../components/Playlist';
import styled from 'styled-components';
const PlaylistWrapper = styled.div`
  .playlistContainer {
    max-width: 500px;
    padding: 60px 20px;
    margin: 0 auto;
    box-sizing: border-box;
  }

  @media (min-width: 768px) {
    .playlistContainer {
      padding: 60px 0;
    }
  }
`

const clientId = '77ed62a445e34fcc90617a4335460d6c';
const url = 'https://soundcloud.com/leesargent/sets/';

export default withRouteData(({ playlist }) => {
  let urlArray = [url];
  let resolveUrl;

  urlArray.push(playlist.slug);
  resolveUrl = urlArray.join('');

  return (
    <PlaylistWrapper>
      <div className="playlistContainer">
        <Playlist
          clientId={clientId}
          resolveUrl={resolveUrl}
          />
      </div>
    </PlaylistWrapper>
  )
})
