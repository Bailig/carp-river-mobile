import React from 'react'
import { FormValidationMessage, FormInput } from 'react-native-elements'

import { Form, EmailInput, PasswordInput, RoundedButton } from './index'

export const SignupForm = ({
    navigate,
    data,
    onNameChange,
    onEmailChange,
    onPasswordChange,
    onSubmit
}) => {
    const { name, email, password, error, loading } = data

    return (
        <Form>
            <FormInput
                placeholder='name'
                inputStyle={{ height: 50 }}
                value={name}
                onChangeText={(value) => onNameChange(value)} 
            />

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
                title='Sign up' 
                onPress={() => onSubmit({ name, email, password }, () => {
                    navigate('Main')
                })}
                loading={loading}
            />
        </Form>
    )
}
