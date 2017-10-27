import React from 'react'
import { View, Text, Button } from 'react-native'

export default (props) => {
    return (
        <View>
            <Text>map!!</Text>
            <Text>map!!</Text>
            <Text>map!!</Text>
            <Text>map!!</Text>
            <Text>map!!</Text>
            <Button 
                title='Menu'
                onPress={() => props.navigation.navigate('Menu')}
            />
        </View>
    )
}
