import firebase from 'firebase'
import { dataConnect } from '../configs/firebaseConfig'

export const registerUserApi = (newUser) => {
    dataConnect.push(newUser)
    return newUser
}
