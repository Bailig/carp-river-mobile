import React from 'react'
import { FormInput } from 'react-native-elements'

export const PasswordInput = ({ value, onChangeText }) => {
    return (
            <FormInput
                secureTextEntry
                autoCorrect={false}
                placeholder='password'
                inputStyle={{ height: 50 }}
                value={value}
                onChangeText={onChangeText} 
            />
    )
}
