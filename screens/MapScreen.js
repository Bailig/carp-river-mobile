import React from 'react'
import { View, Dimensions } from 'react-native'
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux'
import { MapView } from 'expo'

import * as actions from '../actions'
import { Spinner } from '../components'
import { white, green } from '../components/colors'

const SCREEN_WIDTH = Dimensions.get('window').width

class MapScreen extends React.Component {

    componentWillMount() {
        const { loggedIn, navigation } = this.props
        if (!loggedIn) {
            navigation.navigate('Welcome')
        }
    }

    componentDidMount() {
        this.props.watchCurrentPosition()
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.props.currentPositionWatchId)
    }

    render() {
        const { navigation, currentPositionRegion, mapLoaded } = this.props
        if (!mapLoaded) {
            return <Spinner />
        }
        return (
            <View style={{ flex: 1 }} >
                <MapView
                    showsUserLocation
                    initialRegion={currentPositionRegion}
                    mixZoomLevel={17}
                    style={{ flex: 1 }}
                />
                <Icon
                    containerStyle={styles.iconContainerStyle}
                    raised
                    name='briefcase'
                    type='font-awesome'
                    color={white}
                    size={30}
                    onPress={() => navigation.navigate('Menu')}
                />
            </View>
        )
    }
}

const styles = {
    iconContainerStyle: {
        position: 'absolute',
        marginLeft: (SCREEN_WIDTH / 2.0) - 30,
        bottom: 20,
        backgroundColor: green
    }
}

const mapStateToProps = ({ auth, map }, ownProps) => {
    const { loggedIn } = auth
    const { currentPositionRegion, currentPositionWatchId, mapLoaded } = map
    return { loggedIn, currentPositionRegion, currentPositionWatchId, mapLoaded }
}

export default connect(mapStateToProps, actions)(MapScreen)