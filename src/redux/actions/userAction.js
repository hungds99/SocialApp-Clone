import { REGISTER_USER } from '../../constants'
import { registerUserApi } from '../../services'

// export const loginUser = (userData) => (dispatch) => {
//     // Login User
// }

export const registerUser = (newUser) => (dispatch) => {
    // Register new user
    let user = registerUserApi(newUser)
    dispatch({ type: REGISTER_USER, payload: user })
}
