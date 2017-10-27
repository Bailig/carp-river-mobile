import React from 'react'
import { View, Text, Button } from 'react-native'


export default ({ navigation }) => {
    const { navigate, goBack, state } = navigation

    return (
        <View>
            <Text>menu!!</Text>
            <Text>menu!!</Text>
            <Text>menu!!</Text>
            <Text>menu!!</Text>
            <Text>menu!!</Text>
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
