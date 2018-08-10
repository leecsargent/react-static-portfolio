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
import styled from 'styled-components';
const PlaylistWrapper = styled.div`
  .player {
    margin-top: 30px;
  }

  .header {
    padding: 0 10px;
    font-weight: 100;
  }

  .trackButton {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;
    display: flex;
    width: 100%;
    font-size: 1em;
    padding: 1rem;
    margin: 0;
    height: auto;
    vertical-align: middle;
    border-radius: 3px;
    opacity: 0.6;
    box-sizing: border-box;
    -webkit-transition: opacity 0.5s;
    -moz-transition: opacity0.5s;
    -o-transition: opacity 0.5s;
    transition: opacity 0.5s;
  }

  .trackButton:hover {
    opacity: 1;
  }

  .trackButtonActive {
    opacity: 1;
  }

  .trackButtonTitle {
    margin-right: 10px;
  }

  .trackList {
    -webkit-transition: opacity 0.5s;
    -moz-transition: opacity0.5s;
    -o-transition: opacity 0.5s;
    transition: opacity 0.5s;
    opacity: 0;
    visibility: hidden;
  }

  .trackListShow {
    opacity: 1;
    visibility: visible;
  }

  .currentTrack {
    -webkit-transition: 0.5s;
    -moz-transition: 0.5s;
    -o-transition: 0.5s;
    transition: opacity 0.5s;
    opacity: 0;
    visibility: hidden;
  }

  .currentTrackShow {
    opacity: 1;
    visibility: visible;
  }

  .playbackControls {
    display: flex;
    justify-content: space-between;
  }

  .controlButton {
    padding: 10px;
    background-color: transparent;
    text-decoration: none;
    border: 0;
    outline: none;
    cursor: pointer;
    -webkit-appearance: none;
  }

  .playButton {
    width: 34px;
  }

  .previousButton,
  .nextButton {
    width: 40px;
  }

  .progress {
    height: 10px;
    width: 200px;
    background: #ccc;
    align-self: center;
  }

  .progressInner {
    background: black;
    height: 100%;
  }

  .timer {
    text-align: right;
    font-size: 12px;
  }

  .volumeButton button {
    width: 40px;
  }

  .volumeButton div {
    display: none;
  }

  /* TODO just apply this instead of classes */
  button {
    background-color: transparent;
    text-decoration: none;
    border: 0;
    outline: none;
    cursor: pointer;
    -webkit-appearance: none;
  }

  @media (min-width: 768px) {
    .currentTrack {
      padding: 1rem;
    }

    .trackList {
      padding: 0 10px;
    }
  }
`

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

    const componentClasses = ["trackList"];

    if (playlist) {
      componentClasses.push("trackListShow");
    }

    const tracks = playlist && playlist.tracks && playlist.tracks.map((track, i) => {
      const isActive = this.props.soundCloudAudio._playlistIndex === i;

      const className = isActive
        ? "trackButton trackButtonActive"
        : "trackButton";

      return (
        <button
          key={track.id}
          className={className}
          onClick={this.playTrackAtIndex.bind(this, i)}>
          <span className="trackButtonTitle">{track.title}</span>
          <span className="trackButtonTime">{Timer.prettyTime(track.duration / 1000)}</span>
        </button>
      );
    });

    return (
      <div className={componentClasses.join(' ')}>{tracks}</div>
    );
  }

  renderTrackInfo() {
    let { playlist, currentTime, duration } = this.props;
    let componentClasses = ["currentTrack"];
    let previousButtonClass = "controlButton previousButton";
    let nextButtonClass = "controlButton nextButton";
    let playButtonClass = "controlButton playButton";
    let volumeButtonClass = "controlButton volumeButton";
    let progressClass = "progress";
    let progressInnerClass = "progressInner";
    let timerClass = "timer";
    let headerClass = "header";

    if (playlist) {
      componentClasses.push("currentTrackShow");
    }

    return (
      <div className={componentClasses.join(' ')}>
        <h2 className={headerClass}>{playlist ? playlist.title : ''}</h2>
        <div>
          <div className="playbackControls">
            <PrevButton
              className={previousButtonClass}
              onPrevClick={this.prevIndex.bind(this)}
              {...this.props}
            />
            <PlayButton
              className={playButtonClass}
              {...this.props}
            >
            </PlayButton>
            <NextButton
              className={nextButtonClass}
              onNextClick={this.nextIndex.bind(this)}
              {...this.props}
            />
            <VolumeControl
              className={volumeButtonClass}
              {...this.props}
            />
            <Progress
              className={progressClass}
              innerClassName={progressInnerClass}
              value={(currentTime / duration) * 100 || 0}
              {...this.props}
            />
          </div>
          <div className={timerClass}>
            <Timer duration={duration || 0} currentTime={currentTime} {...this.props} />
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <PlaylistWrapper>
        <div className="player">
          {this.renderTrackInfo()}
          {this.renderTrackList()}
        </div>
      </PlaylistWrapper>
    );
  }
}

export default withSoundCloudAudio(PlaylistSoundPlayer);
