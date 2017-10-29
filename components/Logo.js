import React from 'react'
import { Icon } from 'react-native-elements'
import { green } from './colors'

export const Logo = () => {
    return (
        <Icon
            raised
            name='fish'
            type='material-community'
            color={green}
            size={80} 
        />
    )
}