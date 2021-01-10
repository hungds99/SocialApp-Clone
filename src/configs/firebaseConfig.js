import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAJtUkOHgGb5aSimcdmj_CJ9U4PMYDuRu4',
    authDomain: 'facebook-plus-2021.firebaseapp.com',
    databaseURL: 'https://facebook-plus-2021-default-rtdb.firebaseio.com',
    projectId: 'facebook-plus-2021',
    storageBucket: 'facebook-plus-2021.appspot.com',
    messagingSenderId: '90224678749',
    appId: '1:90224678749:web:786b855b377c5ec46b3ab4',
    measurementId: 'G-GSMBRHCHJB'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const dataConnect = firebase.database().ref('account')
