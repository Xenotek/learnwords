import { applyMiddleware, createStore } from 'redux'
import App from './../reducers'
import thunk from 'redux-thunk'
// import {browserHistory} from 'react-router'
import { routerMiddleware } from 'react-router-redux'

// let middleware = [thunk, routerMiddleware(browserHistory)]
let middleware = [thunk]

if (process.env.NODE_ENV !== 'production') {
  const { logger } = require('redux-logger')

  middleware = [...middleware, logger]
}

export let store = createStore(App, applyMiddleware(...middleware))

store.subscribe(() => {
  const state = store.getState()
  
});
