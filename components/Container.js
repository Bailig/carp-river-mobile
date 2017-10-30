import React from 'react'
import { View } from 'react-native'

import { white } from './colors'

export const Container = ({ children, style }) => {
    return (
        <View style={[{ flex: 1, backgroundColor: white }, style]}>
            {children}
        </View>
    )
}
