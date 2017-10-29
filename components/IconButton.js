import React from 'react'
import { Icon } from 'react-native-elements'

import { white, textBlue } from './colors'

export const IconButton = ({ containerStyle, backgroundColor = white, color = textBlue, name, type, onPress }) => {
    return (
        <Icon
            raised
            containerStyle={[containerStyle, { backgroundColor: backgroundColor }]}
            name={name}
            type={type}
            color={color}
            size={30}
            onPress={onPress}
        />
    )
}
