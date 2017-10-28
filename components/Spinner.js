import React from 'react'
import { View, ActivityIndicator } from 'react-native'

import { green } from './colors'

export const Spinner = ({ size }) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 16,
                marginBottom: 16
            }}
        >
            <ActivityIndicator 
                color={green}
                size={size || 'large'} 
            />
        </View>
    )
}
