import { LOGIN_USER, REGISTER_USER } from '../../constants'

const userInitState = {
    user: {}
}

export function UserReducer(state = userInitState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload
            }
        case REGISTER_USER: {
            return userInitState
        }
        default:
            return state
    }
}

UserReducer.propTypes = {}
