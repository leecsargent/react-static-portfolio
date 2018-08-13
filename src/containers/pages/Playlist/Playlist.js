import React from 'react';
import { withRouteData } from 'react-static';
import styled from 'styled-components';
import Playlist from '../../../components/Playlist';

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
`;

const clientId = '77ed62a445e34fcc90617a4335460d6c';
const url = 'https://soundcloud.com/leesargent/sets/';

export default withRouteData(({ playlist }) => {
  const urlArray = [url];
  urlArray.push(playlist.slug);

  const resolveUrl = urlArray.join('');

  return (
    <PlaylistWrapper>
      <div className="playlistContainer">
        <Playlist
          clientId={clientId}
          resolveUrl={resolveUrl}
        />
      </div>
    </PlaylistWrapper>
  );
});
