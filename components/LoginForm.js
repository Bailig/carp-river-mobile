import React from 'react'
import { View, Dimensions } from 'react-native'
import { FormInput, FormValidationMessage } from 'react-native-elements'

import { RoundedButton } from './RoundedButton'
import { Spinner } from './Spinner'

const screenWidth = Dimensions.get('window').width

export const LoginForm = ({ 
    navigate, data, onEmailChange, onPasswordChange, onSubmit
}) => {
    const { containerStyle, formInputStyle } = styles
    const { email, password, error, loading } = data

    const renderButton = () => {
        if (loading) {
            return <Spinner />
        }
        return (
            <RoundedButton
                title='Log in' 
                onPress={() => onSubmit({ email, password }, () => {
                    navigate('Main')
                })}
            />
        )
    }
    
    return (
        <View style={containerStyle}>
            <FormInput
                autoCapitalize={'none'}
                autoCorrect={false}
                placeholder='email'
                inputStyle={formInputStyle}
                value={email}
                onChangeText={(value) => onEmailChange(value)} 
            />

            <FormInput
                secureTextEntry
                autoCorrect={false}
                placeholder='password'
                inputStyle={formInputStyle}
                value={password}
                onChangeText={(value) => onPasswordChange(value)} 
            />

            <FormValidationMessage>{error}</FormValidationMessage>

            {renderButton()}
        </View>
    )
}

const styles = {
    containerStyle: {
        width: screenWidth - 40
    },
    formInputStyle: {
        height: 50
    }
}