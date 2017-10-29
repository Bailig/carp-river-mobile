import React from 'react'
import { View, Text } from 'react-native'

import { BackButton } from '../components'

export default ({ navigation }) => {
    const { goBack, state } = navigation
    return (
        <View style={{ flex: 1 }}>
            <Text>info!!</Text>
            <Text>info!!</Text>
            <Text>info!!</Text>
            <Text>info!!</Text>
            <Text>info!!</Text>
            <BackButton onPress={() => goBack(state.params.menuKey)} />
        </View>
    )
}
