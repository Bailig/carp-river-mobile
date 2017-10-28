import React from 'react'
import { Button } from 'react-native-elements'

import { green } from './colors'

export const RoundedButton = ({ title, onPress }) => {
    return (
        <Button 
            title={title}
            buttonStyle={{
                borderRadius: 100,
                backgroundColor: green,
                marginTop: 16,
                marginBottom: 16
            }}
            onPress={onPress}
        />
    )
}
