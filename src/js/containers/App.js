import React, {Component} from 'react';

// import logo from './img/logo.png';
import Word from './Word';
import Api from '../api/Api'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: false
        }
    }
    componentDidMount() {
        Api.getWords().then(data => {
            this.setState({
                data
            })
        })
        // const xhr = new XMLHttpRequest();
        // xhr.open('GET', 'http://react/learnwords/src/get.php', true);
        // xhr.send();
        // this.setState({ isLoading: true });
        //
        // xhr.onreadystatechange = () => {
        //     if (xhr.readyState !== 4) {
        //         return false
        //     }
        //
        //     if (xhr.status !== 200) {
        //         console.log(xhr.status + ': ' + xhr.statusText)
        //     } else {
        //         console.log(xhr.responseText);
        //         this.setState({
        //             data: JSON.parse(xhr.responseText),
        //             isLoading: false
        //         })
        //     }
        // }
    }
    renderWords() {
        const { data, isLoading } = this.state;
        if (isLoading) {
            // return <img src='/i/preloader.gif' alt='загружаю...' /> // рисуем прелоадер
            return <div>...</div>
        } else {
            return data.map(item => {
                // я здесь отрисываю все через другой компонент, вы же можете просто рисовать сразу верстку для начала
                return <Word key={item.id} name={item.name} price={item.price} quantity={item.quantity} />
            })
        }
    }
    render() {
        return (
            <div className="words">
                <div className="words-list">
                    {this.renderWords()}
                </div>
            </div>
        );
    }
}

export default App;
