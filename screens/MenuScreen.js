import React from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'

import * as actions from '../actions'

const MenuScreen = ({ navigation, logoutUser }) => {
    const { navigate, goBack, state } = navigation

    return (
        <View>
            <Text>menu!!</Text>
            <Text>menu!!</Text>
            <Text>menu!!</Text>
            <Text>menu!!</Text>
            <Text>menu!!</Text>
            <Button
                title='Log out'
                onPress={logoutUser}
            />
            <Button
                title='Profile'
                onPress={() => navigate('Profile', { menuKey: state.key })}
            />
            <Button
                title='Camera'
                onPress={() => navigate('Camera', { menuKey: state.key })}
            />
            <Button
                title='Info'
                onPress={() => navigate('Info', { menuKey: state.key })}
            />
            <Button
                title='Back'
                onPress={() => goBack()}
            />
        </View>
    )
}

export default connect(null, actions)(MenuScreen)