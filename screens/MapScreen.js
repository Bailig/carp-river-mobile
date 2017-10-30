import React from 'react'
import { Dimensions } from 'react-native'
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux'
import { MapView } from 'expo'

import * as actions from '../actions'
import { Spinner, Container } from '../components'
import { green } from '../components/colors'

const SCREEN_WIDTH = Dimensions.get('window').width

class MapScreen extends React.Component {

    componentWillMount() {
        const { loggedIn, navigation } = this.props
        if (!loggedIn) {
            navigation.navigate('Welcome')
        }
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
            <Container>
                <MapView
                    provider='google'
                    showsUserLocation
                    showsMyLocationButton
                    showsCompass
                    showsScale
                    initialRegion={currentPositionRegion}
                    minZoomLevel={10}
                    style={{ flex: 1 }}
                />
                <Icon
                    containerStyle={styles.iconContainerStyle}
                    raised
                    reverse
                    name='briefcase'
                    type='font-awesome'
                    color={green}
                    size={30}
                    onPress={() => navigation.navigate('Menu')}
                />
            </Container>
        )
    }
}

const styles = {
    iconContainerStyle: {
        position: 'absolute',
        marginLeft: (SCREEN_WIDTH / 2.0) - 30,
        bottom: 20
    }
}

const mapStateToProps = ({ auth, map }, ownProps) => {
    const { loggedIn } = auth
    const { currentPositionRegion, currentPositionWatchId, mapLoaded } = map
    return { loggedIn, currentPositionRegion, currentPositionWatchId, mapLoaded }
}

export default connect(mapStateToProps, actions)(MapScreen)