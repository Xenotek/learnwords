import 'es6-promise'
import 'isomorphic-fetch'

class Api {
    static getWords() {
        return fetch('')
            .then(res => res.json())
            .then(res => res['data']);
    }
}

export default Api
