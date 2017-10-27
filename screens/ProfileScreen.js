import React from 'react'
import { View, Text, Button } from 'react-native'

export default ({ navigation }) => {
    const { goBack, state } = navigation
    return (
        <View>
            <Text>profile!!</Text>
            <Text>profile!!</Text>
            <Text>profile!!</Text>
            <Text>profile!!</Text>
            <Text>profile!!</Text>
            <Button 
                title='Back'
                onPress={() => goBack(state.params.menuKey)}
            />
        </View>
    )
}
