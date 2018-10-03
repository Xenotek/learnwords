import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
// import { reducer as formReducer } from 'redux-form'
import * as types from './../constants/ActionTypes'
import activeTags from './activeTags'

const App = combineReducers({
  activeTags,
  routing: routerReducer
});

const Root = (state, action) => {
  if (action.type === types.TOKEN_IS_INVALID) {
    state = Object.assign({}, state, {
      words: {}
    })
  }

  return App(state, action)
}

export default Root
