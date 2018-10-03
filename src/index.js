import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './js/store/store'
// import { syncHistoryWithStore } from 'react-router-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
// import './css/style.css';
import App from './js/containers/App'
import Spinner from './js/components/Spinner'
import NotFound from './js/components/NotFound'
// import registerServiceWorker from './registerServiceWorker'

// const history = syncHistoryWithStore(browserHistory, store)
const rootElement = document.getElementById('root')


if (process.env.NODE_ENV === 'production') {
    require('whatwg-fetch')
    require('core-js/fn/promise')
    require('core-js/fn/symbol')
    //const registerServiceWorker = require('./registerServiceWorker').default
    //registerServiceWorker()
    
} else {
    const {whyDidYouUpdate} = require('why-did-you-update');
    whyDidYouUpdate(React);
}

// registerServiceWorker();
ReactDOM.render(
    <Provider store={store}>
        {/*<Router history={history}>*/}
        <Router>
            <Switch>
                {/*<Route component={Spinner} />*/}
                <Route component={App} />
                <Route path='/404' component={NotFound} />
                <Redirect from='*' to='/404' />
            </Switch>
        </Router>
    </Provider>,
    rootElement
)