import React from 'react'
import { View, Dimensions } from 'react-native'


const SCREEN_WIDTH = Dimensions.get('window').width

export const Form = ({ children }) => {
    return (
        <View style={{ width: SCREEN_WIDTH - 40 }}>
            {children}
        </View>
    )
}
