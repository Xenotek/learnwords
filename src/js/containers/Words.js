import React, {Component} from 'react';
import Api from "../api/Api";

export default class Words extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: false
        }
    }
    componentDidMount() {
        this.setState({
            isLoading: true
        });
        Api.getWords().then(data => {
            this.setState({
                data,
                isLoading: false
            });
            console.log('data', data);
        })
        
    }
    render(){
        const {data, isLoading} = this.state;
        if (isLoading) {
            // return <img src='/i/preloader.gif' alt='загружаю...' /> // рисуем прелоадер
            return <div>Loading Country Names...</div>
        } else {
            return data.map((params, i) => {
                return <Word key={i} params={params}/>
            })
        }
    }
}

function Word({params}) {
    return (
        <div key>{params.area} {params.name} {params.capital} </div>
    )
}









