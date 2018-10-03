import * as types from './../constants/ActionTypes'

const initialState = {}

const activeTags = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_ACTIVE_TAG:
            return Object.assign({}, state, {
                [action.category]: action.tag
            })
        default:
            return state
    }
}

export default activeTags
