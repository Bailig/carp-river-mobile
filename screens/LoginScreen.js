import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import * as actions from '../actions'
import { Logo, LoginForm, TextButton, Container } from '../components'
import { black, green } from '../components/colors'

const LoginScreen = ({ 
    navigation, email, password, error, loading, updateFormEmail, updateFormPassword, loginUser 
}) => {
    return (
        <Container>
            <View   
                style={{ 
                    flex: 0.92,
                    justifyContent: 'center',
                    alignItems: 'center' 
                }}
            >
                <Logo />
                <LoginForm 
                    navigate={navigation.navigate}
                    data={{ email, password, error, loading }}
                    onEmailChange={updateFormEmail}
                    onPasswordChange={updateFormPassword}
                    onSubmit={loginUser}
                />
            </View>
            <View style={{ flex: 0.08, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: black }}>
                    Don't have a account? 
                </Text>

                <TextButton 
                    title='Sign up.' 
                    onPress={() => navigation.navigate('Signup')}
                    color={green}
                />
            </View>
        </Container>
    )
}

const mapStateToProps = ({ auth }, ownProps) => {
    const { email, password, error, loading } = auth
    return { email, password, error, loading }
}
export default connect(mapStateToProps, actions)(LoginScreen)