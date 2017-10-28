import {
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    PASSWORD_UPDATE,
    EMAIL_UPDATE,
    USER_FETCH_FAIL,
    USER_FETCH_SUCCESS
} from '../actions/types'

const initialState = {
    email: '',
    password: '',
    error: '',
    loading: false,
    user: null,
    loggedIn: null
}

export default (state = initialState, action) => {
    switch (action.type) {
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
                loading: true
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
                loggedIn: true
            }
        default:
            return state
    }
}