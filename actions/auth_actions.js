import firebase from 'firebase'

import {
    EMAIL_UPDATE,
    PASSWORD_UPDATE,
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_FETCH_SUCCESS,
    USER_FETCH_FAIL,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAIL,
    USER_SIGNUP_FAIL,
    USER_NAME_UPDATE_SUCCESS,
    USER_NAME_UPDATE_FAIL,
    NAME_UPDATE
} from './types'

export const updateFormEmail = (value) => {
    return {
        type: EMAIL_UPDATE,
        payload: value
    }
}

export const updateFormPassword = (value) => {
    return {
        type: PASSWORD_UPDATE,
        payload: value
    }
}

export const updateFormName = (value) => {
    return {
        type: NAME_UPDATE,
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

export const logoutUser = () => (dispatch) => {
    firebase.auth().signOut()
        .then(() => {
            dispatch({ type: USER_LOGOUT_SUCCESS })
        })
        .catch(() => {
            dispatch({ type: USER_LOGOUT_FAIL, payload: 'Log out failed.' })
        })
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

export const updateUserName = (name) => (dispatch) => {
    firebase.auth().currentUser.updateProfile({ displayName: name })
        .then(() => {
            dispatch({ type: USER_NAME_UPDATE_SUCCESS })
        })
        .catch(() => {
            dispatch({ type: USER_NAME_UPDATE_FAIL, payload: 'Update name failed.' })
        });
}

export const signupUser = ({ email, password, name }, callback) => (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            dispatch(updateUserName(name))
            callback()
        })
        .catch(() => {
            dispatch({ type: USER_SIGNUP_FAIL, payload: 'Sign up failed.' })
        })
}
