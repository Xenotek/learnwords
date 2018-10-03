import React, {Component} from 'react';

export default class Word extends Component {
    render() {
        return (
            <div className="word-item">
                {this.props.title}
            </div>
        );
    }
}