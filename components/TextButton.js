import React from 'react'
import { Button } from 'react-native-elements'

import { black } from './colors'

export const TextButton = ({
    iconRight,
    title,
    fontSize = 16,
    color = black,
    onPress
}) => {
    return (
        <Button
            iconRight={iconRight}
            title={title}
            color={color}
            onPress={onPress}
            fontSize={fontSize}
            backgroundColor='rgba(0, 0, 0, 0)'
            buttonStyle={{ padding: 0 }}
        />
    )
}
