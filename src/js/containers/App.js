import React, {Component} from 'react';

// import logo from './img/logo.png';
import Words from './Words'

class App extends Component {
    render() {
        return (
            <div className="words">
                <div className="words-list">
                    <Words />
                </div>
            </div>
        );
    }
}


export default App;
