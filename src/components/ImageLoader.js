// heavily inspired by https://github.com/IRIdeveloper/react-iron-image
import React, { Component } from 'react';
import styled from 'styled-components';
const IMAGE_FADE_IN_CLASS = `image-loader-image-fade-in`;
const IMAGE_FEAD_IN_CAPTION_CLASS = `image-loader-caption-fade-in`;

const ImageLoaderStyle = styled.div`
  .image-loader-image-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-size: 100% 100%;
  }

  .image-loader-image {
    opacity: 0;
    transition: opacity 0.6s;
  }

  .image-loader-image-fade-in {
    opacity: 1;
    box-sizing: border-box;
    border: 1px solid #ebebeb;
  }

  .image-loader-caption {
    opacity: 0;
    transition: opacity 0.6s;
  }

  .image-loader-caption-fade-in {
    opacity: 1;
  }
`

class IronImage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      imageLoadFinishedClass: ``,
      imageLoadFinishedCaptionClass: ``,
      placeholderStyle: { background: 'white' },
    };

    this.imageLoadHandler = this.imageLoadHandler.bind(this);
  }

  imageLoadHandler() {
    this.setState({
      imageLoadFinishedClass: IMAGE_FADE_IN_CLASS,
      imageLoadFinishedCaptionClass: IMAGE_FEAD_IN_CAPTION_CLASS,
    });
  }

  render() {
    return (
      <ImageLoaderStyle>
        <div
          className="image-loader-image-container"
          style={this.state.placeholderStyle}
        >
          <img
            className={`image-loader-image ${this.state.imageLoadFinishedClass}`}
            alt={this.props.alt}
            src={this.props.src}
            style={this.state.imageStyle}
            onLoad={this.imageLoadHandler}
          />
          <p className={`image-loader-caption ${this.state.imageLoadFinishedCaptionClass}`}>{this.props.caption}</p>
        </div>
      </ImageLoaderStyle>
    );
  };
}

export default IronImage;
