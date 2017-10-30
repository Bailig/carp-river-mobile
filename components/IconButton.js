import React from 'react'
import { Icon } from 'react-native-elements'

import { black } from './colors'

export const IconButton = ({ 
    color = black, 
    size = 30,
    reverse = false,
    containerStyle, 
    name, 
    type,
    onPress
}) => {
    return (
        <Icon
            raised
            reverse={reverse}
            containerStyle={containerStyle}
            name={name}
            type={type}
            color={color}
            size={size}
            onPress={onPress}
        />
    )
}
