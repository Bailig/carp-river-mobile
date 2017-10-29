import {
    CURRENT_POSITION_FETCH_FAIL,
    CURRENT_POSITION_UPDATE,
    CURRENT_POSITION_WATCH_ID_UPDATE
} from '../actions/types'

const initialState = {
    currentPositionRegion: {
        latitude: 45.4215,
        longitude: -75.6972,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0519
    },
    currentPositionWatchId: null,
    mapLoaded: false,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_POSITION_FETCH_FAIL:
            return {
                ...state,
                email: action.payload
            }
        case CURRENT_POSITION_UPDATE:
            return {
                ...state,
                currentPositionRegion: action.payload,
                mapLoaded: true
            }
        case CURRENT_POSITION_WATCH_ID_UPDATE:
            return {
                ...state,
                currentPositionWatchId: action.payload
            }
        default:
            return state
    }
}