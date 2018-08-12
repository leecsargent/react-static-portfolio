import { createStore, applyMiddleware, compose } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import thunk from './middleware/thunk';
import reducer from './reducers'

if (typeof window === 'undefined') {
  global.window = {}
}

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  {}, // initial state
  composeWithDevTools(applyMiddleware(thunk))
)
/* eslint-enable */
export default store
