import { Dimensions } from 'react-native'

import {
    CURRENT_POSITION_FETCH_FAIL,
    CURRENT_POSITION_UPDATE,
    CURRENT_POSITION_WATCH_ID_UPDATE
} from './types'

const { width, height } = Dimensions.get('window')

const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.009
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

export const watchCurrentPosition = () => (dispatch) => {
    const fetchPositionSuccess = (position) => {
        const lat = parseFloat(position.coords.latitude)
        const long = parseFloat(position.coords.longitude)

        const region = {
            latitude: lat,
            longitude: long,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
        }
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