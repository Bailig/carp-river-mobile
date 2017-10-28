import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import firebase from 'firebase'
import { connect } from 'react-redux'

import { firebaseConfig } from '../config/keys'
import * as actions from '../actions'
import WelcomeScreen from './WelcomeScreen'
import AuthScreen from './AuthScreen'
import MapScreen from './MapScreen'
import MenuScreen from './MenuScreen'
import CameraScreen from './CameraScreen'
import InfoScreen from './InfoScreen'
import ProfileScreen from './ProfileScreen'
import { Spinner } from '../components'

class Screens extends React.Component {
    componentWillMount() {
        firebase.initializeApp(firebaseConfig)
        this.props.listenAuthState()
    }

    render() {
        const MainFlow = StackNavigator({
            Map: { screen: MapScreen },
            Menu: { screen: MenuScreen },
            Profile: { screen: ProfileScreen },
            Camera: { screen: CameraScreen },
            Info: { screen: InfoScreen }
        }, {
            mode: 'modal'
        })

        const AppNavigator = TabNavigator({
            Main: { screen: MainFlow },
            Welcome: { screen: WelcomeScreen },
            Auth: { screen: AuthScreen }
        }, {
            navigationOptions: {
                tabBarVisible: false
            }
        })

        switch (this.props.loggedIn) {
            case null:
                return <Spinner />
            default:
                return <AppNavigator />
        }
    }
}

const mapStateToProps = ({ auth }, ownProps) => {
    const { loggedIn } = auth
    return { loggedIn }
}
export default connect(mapStateToProps, actions)(Screens)