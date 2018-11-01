import 'es6-promise'
import 'isomorphic-fetch'

class Api {
    static getWords() {
        return fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            // .then(json => json.map(country => country.name));
    }
}

export default Api
