import React from 'react'
import { Router, Link } from 'react-static'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import store from './connectors/redux'
import styled, { injectGlobal } from 'styled-components'
import GithubSVG from './gh.svg'

injectGlobal`
  html {
    height: 100%;
  }

  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
    color: #2B2B3A;
    height: 100%;
    background-image: radial-gradient(
      circle at top right,
      #ffffff,
      #ebebeb
    );
    background-attachment: fixed;
  }
  #root,
  #root > div {
    height: 100%;
    min-height: 100%;
  }
`

const AppStyles = styled.div`
  a {
    text-decoration: none;
    color: #254558;
  }

  img {
    max-width: 100%;
  }

  nav {
    position: fixed;
    height: 52px;
    z-index: 1;
    width: 100%;
    background: #F4F5F6;
    box-shadow: 0px 1px 0px #ccc;
    overflow-y: hidden;
    z-index: 1;
  }

  .nav-link {
    color: #254558;
    padding: 1rem ;
    display: inline-block;
    font-weight: 100;
  }

  nav a.active {
    font-weight: lighter;
  }

  .nav-link::after {
    content: '';
    display: block;
    width: 100%;
    background: #254558;
    height: 3px;
    top: 15px;
    transform: translateY(5px);
    transition: transform 0.6s;
    position: relative;
  }

  .nav-link.active::after {
    transform: translateY(0);
  }

  .wrapper {
    min-height: 100%;
  }

  .content {
    padding: 1rem;
    box-sizing: border-box;
    height: 100%;
  }

  .footer {
    height: 70px;
    margin-top: -70px;
  }

  .footer-link {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .footer-text {
    margin: 0;
    text-align: center;
    font-size: 14px;
  }

  .work-link-svg {
    width: 20px;
    height: 20px;
    margin-bottom: 10px;
  }
`

const App = () => (
  <Provider store={store}>
    <Router>
      <AppStyles>
        <div className="wrapper">
          <nav>
            <Link exact to="/" className="nav-link">Home</Link>
            <Link to="/work" className="nav-link">Work</Link>
            <Link to="/fun" className="nav-link">Fun</Link>
          </nav>
          <div className="content">
            <Routes />
          </div>
        </div>
        <footer className="footer">
          <p className="footer-text">
            <Link to="https://github.com/lsarge/react-static-portfolio" target="_blank" className="footer-link">
              <img src={GithubSVG} className="work-link-svg"/>Here's how I'm building this.
            </Link>
          </p>
        </footer>
      </AppStyles>
    </Router>
  </Provider>
)

export default hot(module)(App)
