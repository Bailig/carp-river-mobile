import React from 'react'
import { FormValidationMessage } from 'react-native-elements'

import { RoundedButton, Form, EmailInput, PasswordInput } from './index'


export const LoginForm = ({ 
    navigate, data, onEmailChange, onPasswordChange, onSubmit
}) => {
    const { email, password, error, loading } = data

    return (
        <Form>
            <EmailInput 
                value={email} 
                onChangeText={(value) => onEmailChange(value)} 
            />

            <PasswordInput
                value={password}
                onChangeText={(value) => onPasswordChange(value)} 
            />

            <FormValidationMessage>{error}</FormValidationMessage>

            <RoundedButton
                title='Log in' 
                onPress={() => onSubmit({ email, password }, () => {
                    navigate('Main')
                })}
                loading={loading}
            />
        </Form>
    )
}
