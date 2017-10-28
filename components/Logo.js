import React from 'react'
import { Card } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { green } from './colors'

export const Logo = () => {
    return (
        <Card containerStyle={{ borderRadius: 100 }}>
            <Icon name="fish" size={100} color={green} />
        </Card>
    )
}