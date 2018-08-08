import React from 'react'
import { withSiteData } from 'react-static'
import { PlayButton, Progress, Icons } from 'react-soundplayer/components';
import { SoundPlayerContainer } from 'react-soundplayer/addons';

import sound from '../../sc.config.js';

const clientId = '77ed62a445e34fcc90617a4335460d6c';
const resolveUrl = 'https://soundcloud.com/leesargent';

const Player = props => {
  let { track, duration, currentTime } = props;
  let trackLoaded = !!track;
  let headerClass = trackLoaded
    ? "sound-player--title-header"
    : "sound-player--title-header-loading";

  let loaded = (
    <div className="sound-player-container">
      <div className="sound-player--title-container">
        <h2 className={headerClass}>
          {track ? track.title : ''}
        </h2>
      </div>
      <div className="sound-player--progress-container">
        <Progress
          value={currentTime / duration * 100 || 0}
          {...props}
        />
        <PlayButton
          {...props}
        />
      </div>
    </div>
  );

  let loading = (
    <div className="sound-player-container">
      <div className="loading">loading...</div>
    </div>
  );

  return trackLoaded ? loaded : loading;
};

const Track = props => {
  return (
    <SoundPlayerContainer {...props}>
      <Player />
    </SoundPlayerContainer>
  );
}

export default withSiteData(() => (
  <div className="music-container">
    <div>
      <h1>Music</h1>
      { sound.tracks && sound.tracks.map((track, index) => {
        return (
          <Track resolveUrl={track} clientId={sound.clientId} key={index} />
        )
      })}
    </div>
  </div>
))
