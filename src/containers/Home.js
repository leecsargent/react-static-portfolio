import React from 'react'
import { withSiteData } from 'react-static'
import styled from 'styled-components';
import TextTransition from '../components/TextTransition';

const HomeWrapper = styled.div`
  .homeContainer {
    max-width: 500px;
    padding: 60px 20px;
    margin: 0 auto;
    box-sizing: border-box;
  }

  @media (min-width: 768px) {
    .homeContainer {
      padding: 60px 0;
    }
  }
`

export default withSiteData(() => (
  <HomeWrapper>
    <div className="homeContainer">
      <h1>Lee Sargent</h1>
      <TextTransition text="Front End Developer"></TextTransition>
    </div>
  </HomeWrapper>
))
