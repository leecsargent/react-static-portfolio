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
import styles from './Playlist.css';

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

    const componentClasses = [styles.trackList];

    if (playlist) {
      componentClasses.push(styles.trackListShow);
    }

    const tracks = playlist && playlist.tracks && playlist.tracks.map((track, i) => {
      const isActive = this.props.soundCloudAudio._playlistIndex === i;

      const className = isActive
        ? `${styles.trackButton} ${styles.trackButtonActive}`
        : `${styles.trackButton}`;

      return (
        <button
          key={track.id}
          className={className}
          onClick={this.playTrackAtIndex.bind(this, i)}>
          <span className={styles.trackButtonTitle}>{track.title}</span>
          <span className={styles.trackButtonTime}>{Timer.prettyTime(track.duration / 1000)}</span>
        </button>
      );
    });

    return (
      <div className={componentClasses.join(' ')}>{tracks}</div>
    );
  }

  renderTrackInfo() {
    let { playlist, currentTime, duration } = this.props;
    let componentClasses = [styles.currentTrack];
    let previousButtonClass = `${styles.controlButton} ${styles.previousButton}`;
    let nextButtonClass = `${styles.controlButton} ${styles.nextButton}`;
    let playButtonClass = `${styles.controlButton} ${styles.playButton}`;
    let volumeButtonClass = `${styles.controlButton} ${styles.volumeButton}`;
    let progressClass = `${styles.progress}`;
    let progressInnerClass = `${styles.progressInner}`;
    let timerClass = `${styles.timer}`;
    let headerClass = `${styles.header}`;

    if (playlist) {
      componentClasses.push(styles.currentTrackShow);
    }

    return (
      <div className={componentClasses.join(' ')}>
        <h2 className={headerClass}>{playlist ? playlist.title : ''}</h2>
        <div>
          <div className={styles.playbackControls}>
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
      <div className={styles.player}>
        {this.renderTrackInfo()}
        {this.renderTrackList()}
      </div>
    );
  }
}

export default withSoundCloudAudio(PlaylistSoundPlayer);
