import {
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    PASSWORD_UPDATE,
    EMAIL_UPDATE,
    USER_FETCH_FAIL,
    USER_FETCH_SUCCESS,
    USER_LOGOUT_FAIL,
    USER_LOGOUT_SUCCESS,
    USER_NAME_UPDATE_FAIL,
    USER_NAME_UPDATE_SUCCESS,
    NAME_UPDATE,
    USER_SIGNUP_FAIL
} from '../actions/types'

const initialState = {
    email: '',
    password: '',
    name: '',
    error: '',
    loading: false,
    user: null,
    loggedIn: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case NAME_UPDATE:
            return {
                ...state,
                name: action.payload
            }
        case EMAIL_UPDATE:
            return {
                ...state,
                email: action.payload
            }
        case PASSWORD_UPDATE:
            return {
                ...state,
                password: action.payload
            }
        case USER_LOGIN_FAIL:
            return {
                ...state,
                error: action.payload,
                password: '',
                loading: false
            }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                email: '',
                password: '',
                error: '',
                loading: false
            }
        case USER_LOGIN:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case USER_FETCH_FAIL:
            return {
                ...initialState,
                loggedIn: false
            }
        case USER_FETCH_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: '',
                loggedIn: true
            }
        case USER_LOGOUT_FAIL:
            return { 
                ...state, 
                error: action.payload 
            }
        case USER_LOGOUT_SUCCESS:
            return { 
                ...state, 
                error: ''
            }
        case USER_NAME_UPDATE_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case USER_NAME_UPDATE_SUCCESS:
            return {
                ...state,
                error: ''
            }
        case USER_SIGNUP_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}