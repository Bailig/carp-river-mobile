import React from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'

import * as actions from '../actions'
import { BackButton, Container, SignupForm } from '../components'

const SignupScreen = ({ 
    navigation,
    email,
    password,
    name,
    error,
    loading,
    updateFormName, 
    updateFormEmail, 
    updateFormPassword, 
    signupUser,
 }) => {
    return (
        <Container style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, marginBottom: 12 }}>Sign up using email</Text>
            <SignupForm 
                navigate={navigation.navigate}
                data={{ name, email, password, error, loading }}
                onNameChange={updateFormName}
                onEmailChange={updateFormEmail}
                onPasswordChange={updateFormPassword}
                onSubmit={signupUser}
            />
            <BackButton onPress={() => navigation.goBack()} />
        </Container>
    )
}

const mapStateToProps = ({ auth: { email, password, name, error, loading } }, ownProps) => {
    return { email, password, name, error, loading }
}

export default connect(mapStateToProps, actions)(SignupScreen)