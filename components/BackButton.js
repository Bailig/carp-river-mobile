import React from 'react'
import { Dimensions } from 'react-native'
import { IconButton } from './IconButton'

import { black } from './colors'

const SCREEN_WIDTH = Dimensions.get('window').width

export const BackButton = ({ onPress }) => {
    return (
        <IconButton
            containerStyle={{
                position: 'absolute',
                marginLeft: (SCREEN_WIDTH / 2.0) - 20,
                bottom: 30
            }}
            reverse
            color={black}
            size={20}
            name='close-circle'
            type='material-community'
            onPress={onPress}
        />
    )
}
