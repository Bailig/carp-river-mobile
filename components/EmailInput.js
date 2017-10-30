import React from 'react'
import { FormInput } from 'react-native-elements'

export const EmailInput = ({ value, onChangeText }) => {
    return (
            <FormInput
                autoCapitalize={'none'}
                autoCorrect={false}
                placeholder='email'
                inputStyle={{ height: 50 }}
                value={value}
                onChangeText={onChangeText} 
            />
    )
}
