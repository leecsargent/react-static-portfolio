import React from 'react';
import { withRouteData } from 'react-static';
import styled from 'styled-components';
import Playlist from '../../../components/Playlist';
import config from '../../../../config';

export const PlaylistWrapper = styled.div`
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

const clientId = config.soundCloudClientId;
const url = 'https://soundcloud.com/leesargent/sets/';

export const PlaylistConatiner = ({ playlist }) => {
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
}

export default withRouteData(PlaylistConatiner);
