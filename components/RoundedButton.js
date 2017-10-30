import React from 'react'
import { Button } from 'react-native-elements'

import { Spinner } from './index'
import { green } from './colors'

export const RoundedButton = ({ title, onPress, backgroundColor = green, loading = false }) => {
    if (loading) {
        return <Spinner />
    }
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
