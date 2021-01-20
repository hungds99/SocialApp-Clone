import { LOAD_POST_FEED } from '../../constants'

const postInitState = {
    posts: []
}

export function PostReducer(state = postInitState, action) {
    switch (action.type) {
        case LOAD_POST_FEED:
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state
    }
}
