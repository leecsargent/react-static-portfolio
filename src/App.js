import React from 'react'
import { Router, Link } from 'react-static'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import store from './connectors/redux'
import styled, { injectGlobal } from 'styled-components'

injectGlobal`
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
      font-weight: 300;
      font-size: 16px;
      margin: 0;
      padding: 0;
      color: #2B2B3A;
      height: 100%;
  }
`

const AppStyles = styled.div`
  #root,
  #root > div {
    height: 100%;
  }

  a {
    text-decoration: none;
    color: #254558;
  }

  img {
    max-width: 100%;
  }

  nav {
    position: fixed;
    width: 100%;
    background: #F4F5F6;
    box-shadow: 0px 1px 0px #ccc;
    overflow-y: hidden;
  }

  nav a {
    color: #254558;
    padding: 1rem ;
    display: inline-block;
    font-weight: 100;
  }

  nav a.active {
    font-weight: lighter;
  }

  nav a::after {
    content: '';
    display: block;
    width: 100%;
    background: #254558;
    height: 3px;
    position: relative;
    top: 20px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  nav a.active::after {
    -webkit-animation: activeTabBorder 0.75s forwards;
    animation: activeTabBorder 0.75s forwards;
  }

  .content {
    padding: 1rem;
    height: 100%;
    box-sizing: border-box;;
  }
`

const App = () => (
  <Provider store={store}>
    <Router>
      <AppStyles>
      <div>
        <nav>
          <Link exact to="/">Home</Link>
          <Link to="/work">Work</Link>
          <Link to="/fun">Fun</Link>
        </nav>
        <div className="content">
          <Routes />
        </div>
      </div>
    </AppStyles>
    </Router>
  </Provider>
)

export default hot(module)(App)
