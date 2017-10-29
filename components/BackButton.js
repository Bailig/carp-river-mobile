import React from 'react'
import { Dimensions } from 'react-native'
import { IconButton } from './IconButton'

const SCREEN_WIDTH = Dimensions.get('window').width

export const BackButton = ({ onPress }) => {
    return (
        <IconButton
            containerStyle={{
                position: 'absolute',
                marginLeft: (SCREEN_WIDTH / 2.0) - 30,
                bottom: 20
            }}
            name='close-circle'
            type='material-community'
            onPress={onPress}
        />
    )
}
