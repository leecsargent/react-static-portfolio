import React from 'react'
import { Router, Link } from 'react-static'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
//
import store from './connectors/redux'

import './App.css'

const App = () => (
  <Provider store={store}>
    <Router>
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
    </Router>
  </Provider>
)

export default hot(module)(App)
