import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'

import store from './store'
import Screens from './screens'
import { white } from './components/colors'

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <Screens />
                </View>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white
    },
})
