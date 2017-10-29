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
            Profile: { screen: ProfileScreen },
            Camera: { screen: CameraScreen },
            Info: { screen: InfoScreen },
            Menu: { screen: MenuScreen }
        }, {
                cardStyle: {
                    backgroundColor: 'rgba(213, 213, 213, 0.9)'
                },
                transitionConfig: () => {
                    return {
                        screenInterpolator: sceneProps => {
                            const { layout, position, scene } = sceneProps;
                            const { index } = scene;

                            const height = layout.initHeight;
                            const translateY = position.interpolate({
                                inputRange: [index - 1, index, index + 1],
                                outputRange: [height, 0, 0],
                            });

                            const opacity = position.interpolate({
                                inputRange: [index - 1, index - 0.99, index],
                                outputRange: [0, 1, 1],
                            });

                            return { opacity, transform: [{ translateY }] };
                        }
                    }
                },
                mode: 'modal',
                navigationOptions: {
                    header: false
                }
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