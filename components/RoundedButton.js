import React from 'react'
import { Button } from 'react-native-elements'

import { green } from './colors'

export const RoundedButton = ({ title, onPress, backgroundColor = green }) => {
    return (
        <Button 
            raised
            title={title}
            buttonStyle={{
                borderRadius: 100,
                backgroundColor: backgroundColor,
                marginTop: 16,
                marginBottom: 16
            }}
            onPress={onPress}
        />
    )
}
