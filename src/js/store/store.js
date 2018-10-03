import {applyMiddleware, createStore} from 'redux'
import App from './../reducers'
import thunk from 'redux-thunk'
import {loadState, saveState} from '../localStorage'

let middleware = [thunk]

if (process.env.NODE_ENV !== 'production') {
    const {logger} = require('redux-logger')
    
    middleware = [...middleware, logger]
}

export let store = createStore(App, applyMiddleware(...middleware))

store.subscribe(() => {
    const state = store.getState();
    
    saveState({
        currentCity: state.currentCity
    })
    
});
