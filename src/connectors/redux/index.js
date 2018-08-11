import { createStore, applyMiddleware, compose } from 'redux'
import thunk from './middleware/thunk';
import reducer from './reducers'

if (typeof window === 'undefined') {
  global.window = {}
}

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  {}, // initial state
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
/* eslint-enable */
export default store
