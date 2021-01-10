import { dataConnect } from '../config-firebase/firebaseConnect'

var redux = require('redux')

const noteInitialState = {
    account: {}
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case 'REGISTER':
            dataConnect.push(action.account)
            console.log('Create success!' + JSON.stringify(action.account))
            return state

        default:
            return state
    }
}
var store = redux.createStore(allReducer)
store.subscribe(function () {
    console.log(JSON.stringify(store.getState()))
})

export default store
