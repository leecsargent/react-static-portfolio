// heavily inspired by https://github.com/IRIdeveloper/react-iron-image
import React, { Component } from 'react';
import styled from 'styled-components';

const TextTransitionWrapper = styled.div`
  .text-transition {
    opacity: 0;
    transform: translateY(10px);
    transition-duration: 0.6s;
    transition-delay: 1s;
  }

  .text-transition.show {
    transform: translateY(0);
    opacity: 1;
  }
`;
class TextTransition extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    window.requestAnimationFrame(this.bindAnimationFrameRequest.bind(this));
  }

  bindAnimationFrameRequest() {
    this.setState({ loading: false });
  }

  render() {
    const { children } = this.props;
    const className = this.state.loading
      ? 'text-transition'
      : 'text-transition show';

    return (
      <TextTransitionWrapper>
        <div className={className}>{children}</div>
      </TextTransitionWrapper>
    );
  }
}

export default TextTransition;
