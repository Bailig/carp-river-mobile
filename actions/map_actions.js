import { Dimensions } from 'react-native'

import {
    CURRENT_POSITION_FETCH_FAIL,
    CURRENT_POSITION_UPDATE,
    CURRENT_POSITION_WATCH_ID_UPDATE
} from './types'


export const getRegion = ({ latitude, longitude }) => {
    const { width, height } = Dimensions.get('window')
    const aspectRatio = width / height
    const latitudeDelta = 0.009
    return {
        latitude,
        longitude,
        latitudeDelta,
        longitudeDelta: latitudeDelta * aspectRatio
    }
}

export const watchCurrentPosition = () => (dispatch) => {
    const fetchPositionSuccess = (position) => {
        const latitude = parseFloat(position.coords.latitude)
        const longitude = parseFloat(position.coords.longitude)

        const region = getRegion({ latitude, longitude })
        
        dispatch({
            type: CURRENT_POSITION_UPDATE,
            payload: region
        })
    }

    const fetPositionFail = (error) => {
        dispatch({
            type: CURRENT_POSITION_FETCH_FAIL,
            payload: error.message
        })
    }

    const fetchPositionOptions = {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
    }
    const watchID = navigator.geolocation.watchPosition(fetchPositionSuccess, fetPositionFail, fetchPositionOptions)

    dispatch({
        type: CURRENT_POSITION_WATCH_ID_UPDATE,
        payload: watchID
    })
}