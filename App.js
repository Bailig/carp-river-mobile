import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'

import WelcomeScreen from './screens/WelcomeScreen'
import AuthScreen from './screens/AuthScreen'
import MapScreen from './screens/MapScreen'
import MenuScreen from './screens/MenuScreen'
import CameraScreen from './screens/CameraScreen'
import InfoScreen from './screens/InfoScreen'
import ProfileScreen from './screens/ProfileScreen'

export default class App extends React.Component {
  render() {
    const MainFlow = StackNavigator({
      Map: {
        screen: MapScreen
      },
      Menu: {
        screen: MenuScreen
      },
      Profile: {
        screen: ProfileScreen
      },
      Camera: {
        screen: CameraScreen
      },
      Info: {
        screen: InfoScreen
      }
    }, {
      mode: 'modal'
    })

    const AppNavigator = TabNavigator({
      Welcome: {
        screen: WelcomeScreen
      },
      Auth: {
        screen: AuthScreen
      },
      Main: {
        screen: MainFlow
      }
    })

    
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
})
