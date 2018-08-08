import React from 'react'
import { withSiteData } from 'react-static'
import { PlayButton, Progress } from 'react-soundplayer/components';
import { SoundPlayerContainer } from 'react-soundplayer/addons';

const clientId = '77ed62a445e34fcc90617a4335460d6c';
const resolveUrl = 'https://soundcloud.com/leesargent';

const Player = props => {
  let { track, duration, currentTime } = props;
  return (
      <div className="py2 white bg-cover bg-top rounded flex flex-center relative">
          <div className="bg-black absolute top-0 right-0 left-0 bottom-0 muted" />
          <div className="center  relative z1">
              <h2 className="h0 nowrap caps ml2 m0">{track ? track.title : ''}</h2>
          </div>
          <div className="flex flex-center z1">
              <PlayButton
                  className="flex-none h2  button button-transparent button-grow rounded ml2"
                  {...props}
              />
              <Progress
                  className="bg-darken-3 rounded"
                  innerClassName="rounded-left bg-black"
                  value={currentTime / duration * 100 || 0}
                  {...props}
              />
          </div>
      </div>
  );
};


const BackgroundSoundPlayer = props => {
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
      <div>
        <BackgroundSoundPlayer resolveUrl="https://soundcloud.com/leesargent/noa-eini-2" clientId="77ed62a445e34fcc90617a4335460d6c"  />
        <BackgroundSoundPlayer resolveUrl="https://soundcloud.com/leesargent/dust-to-dust-3" clientId="77ed62a445e34fcc90617a4335460d6c"  />
        <BackgroundSoundPlayer resolveUrl="https://soundcloud.com/leesargent/guy-in-a-room" clientId="77ed62a445e34fcc90617a4335460d6c"  />
        <BackgroundSoundPlayer resolveUrl="https://soundcloud.com/leesargent/fallen-branches-and-stones" clientId="77ed62a445e34fcc90617a4335460d6c"  />
        <BackgroundSoundPlayer resolveUrl="https://soundcloud.com/leesargent/ascent-1" clientId="77ed62a445e34fcc90617a4335460d6c"  />
        <BackgroundSoundPlayer resolveUrl="https://soundcloud.com/leesargent/in-case-of-fire-1" clientId="77ed62a445e34fcc90617a4335460d6c"  />
        <BackgroundSoundPlayer resolveUrl="https://soundcloud.com/leesargent/procession" clientId="77ed62a445e34fcc90617a4335460d6c"  />
      </div>
    </div>
  </div>
))
