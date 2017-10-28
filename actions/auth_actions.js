import firebase from 'firebase'

import {
    EMAIL_UPDATE,
    PASSWORD_UPDATE,
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_FETCH_SUCCESS,
    USER_FETCH_FAIL,
    USER_LOGOUT
} from './types'

export const updateEmail = (value) => {
    return {
        type: EMAIL_UPDATE,
        payload: value
    }
}

export const updatePassword = (value) => {
    return {
        type: PASSWORD_UPDATE,
        payload: value
    }
}

export const loginUser = ({ email, password }, callback) => (dispatch) => {
    dispatch({ type: USER_LOGIN })

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            dispatch({ type: USER_LOGIN_SUCCESS })
            callback()
        })
        .catch(() => {
            dispatch({
                type: USER_LOGIN_FAIL,
                payload: 'Log in failed.'
            })
        })
}

export const logoutUser = () => {
    firebase.auth().signOut()
    return { type: USER_LOGOUT }
}


export const listenAuthState = () => (dispatch) => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            dispatch({
                type: USER_FETCH_SUCCESS,
                payload: user
            })
        } else {
            dispatch({ type: USER_FETCH_FAIL })
        }
    })
}
