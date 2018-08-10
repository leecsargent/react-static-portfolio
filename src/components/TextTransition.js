// heavily inspired by https://github.com/IRIdeveloper/react-iron-image
import React, { Component } from 'react';
import styled from 'styled-components';
const IMAGE_FADE_IN_CLASS = `image-loader-image-fade-in`;
const IMAGE_FEAD_IN_CAPTION_CLASS = `image-loader-caption-fade-in`;

const TextTransitionWrapper = styled.div`
  .text-transition {
    opacity: 0;
    transform: translateY(20px);
    transition: 0.6s;
  }

  .text-transition.show {
    transform: translateY(0);
    opacity: 1;
  }
`
class TextTransition extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    window.requestAnimationFrame(this.bindAnimationFrameRequest.bind(this));
  }

  bindAnimationFrameRequest() {
    this.setState({loading: false});
  }

  render() {
    let { text } = this.props;
    let className = this.state.loading
      ? 'text-transition'
      : 'text-transition show';

    return (
      <TextTransitionWrapper>
        <p className={className}>{text}</p>
      </TextTransitionWrapper>
    );
  }
};

export default TextTransition;
