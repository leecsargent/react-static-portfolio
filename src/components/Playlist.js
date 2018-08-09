import React, { Component } from 'react';
import { withSoundCloudAudio } from 'react-soundplayer/addons';
import ClassNames from 'classnames';

import {
  PlayButton,
  PrevButton,
  NextButton,
  Progress,
  Timer,
  VolumeControl
} from 'react-soundplayer/components';

class PlaylistSoundPlayer extends Component {
  constructor() {
    super();

    this.state = {
      activeIndex: 0
    };
  }

  playTrackAtIndex(playlistIndex) {
    const { soundCloudAudio } = this.props;

    this.setState({activeIndex: playlistIndex});

    soundCloudAudio.play({ playlistIndex });
  }

  nextIndex() {
    const { playlist } = this.props;
    let { activeIndex } = this.state;

    if (activeIndex >= playlist.tracks.length - 1) {
      return;
    }

    if (activeIndex || activeIndex === 0) {
      this.setState({activeIndex: ++activeIndex});
    }
  }

  prevIndex() {
    let { activeIndex } = this.state;

    if (activeIndex <= 0) {
      return;
    }

    if (activeIndex || activeIndex === 0) {
      this.setState({activeIndex: --activeIndex});
    }
  }

  renderTrackList() {
    const { playlist } = this.props;

    if (!playlist) {
      return <div>Loading list...</div>;
    }

    const tracks = playlist.tracks.map((track, i) => {
      const classNames = ClassNames('playlist-track-button', {
        'is-active': this.props.soundCloudAudio._playlistIndex === i
      });

      return (
        <button
          key={track.id}
          className={classNames}
          onClick={this.playTrackAtIndex.bind(this, i)}>
          <span className="playlist-track-button__title">{track.title}</span>
          <span className="playlist-track-button__time">{Timer.prettyTime(track.duration / 1000)}</span>
        </button>
      );
    });

    return (
      <div>{tracks}</div>
    );
  }

  renderTrackInfo() {
    let { playlist, currentTime, duration } = this.props;
    const componentClasses = ['current-track'];

    if (playlist) { componentClasses.push('show'); }
    // if (!playlist) {
    //   return <div>Loading track info...</div>;
    // }

    return (
      <div className={componentClasses.join(' ')}>
        <div>
          <Timer duration={duration || 0} currentTime={currentTime} {...this.props} />
        </div>

        <h2>{playlist ? playlist.title : ''}</h2>
        <div>
          <div className="play-next-prev">
            <PrevButton
              className="track-control track-control__prev"
              onPrevClick={this.prevIndex.bind(this)}
              {...this.props}
            />
            <PlayButton
              className="track-control track-control__play"
              {...this.props}
            >
            </PlayButton>
            <NextButton
              className="track-control track-control__next"
              onNextClick={this.nextIndex.bind(this)}
              {...this.props}
            />
          </div>
          <VolumeControl
            className="track-control"
            {...this.props}
          />
          <Progress
            value={(currentTime / duration) * 100 || 0}
            {...this.props}
          />
        </div>
      </div>
    )
  }

  render() {

    return (
      <div className="playlist">
        {this.renderTrackInfo()}
        {this.renderTrackList()}
      </div>
    );
  }
}

export default withSoundCloudAudio(PlaylistSoundPlayer);
