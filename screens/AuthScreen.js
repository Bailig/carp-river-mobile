import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import * as actions from '../actions'
import { Logo, LoginForm } from '../components'


const AuthScreen = ({ 
    navigation, email, password, error, loading, updateEmail, updatePassword, loginUser 
}) => {
    const { containerStyle } = styles
    return (
        <View style={containerStyle}>
            <Logo />
            <LoginForm 
                navigate={navigation.navigate}
                data={{ email, password, error, loading }}
                onEmailChange={updateEmail}
                onPasswordChange={updatePassword}
                onSubmit={loginUser}
            />
        </View>
    )
}

const styles = {
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e7e7e7'
    }
}

const mapStateToProps = ({ auth }, ownProps) => {
    const { email, password, error, loading } = auth
    return { email, password, error, loading }
}
export default connect(mapStateToProps, actions)(AuthScreen)