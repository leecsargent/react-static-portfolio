import React from 'react';
import { withRouteData, Link } from 'react-static';
import styled from 'styled-components';

const MusicWrapper = styled.div`
  .musicContainer {
    max-width: 500px;
    padding: 60px 20px;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .header {
    margin-bottom: 60px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
  }

  .musicProjectsList {
    list-style: none;
    padding: 0;
  }

  .musicProjectsListItem {
    font-size: 24px;
    padding: 12px 0;
  }

  .headerSpan {
    font-weight: 100;
  }

  @media (min-width: 768px) {
    .musicContainer {
      padding: 60px 0;
    }
  }
`;

export const Music = ({ playlists }) => (
  <MusicWrapper>
    <div className="musicContainer">
      <h1 className="header">Not Work <span className="headerSpan">(Music)</span></h1>
      <ul className="musicProjectsList">
        {playlists.map(playlist => (
          <li key={playlist.slug} className="musicProjectsListItem">
            <Link to={`/fun/${playlist.slug}/`}>{playlist.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  </MusicWrapper>
)

export default withRouteData(Music);
