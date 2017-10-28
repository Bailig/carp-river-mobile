import React from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'

class MapScreen extends React.Component {

    componentWillMount() {
        const { loggedIn, navigation } = this.props
        if (!loggedIn) {
            navigation.navigate('Welcome')
        }
    }

    render() {
        const { navigation } = this.props
        return (
            <View>
                <Text>map!!</Text>
                <Text>map!!</Text>
                <Text>map!!</Text>
                <Text>map!!</Text>
                <Text>map!!</Text>
                <Button 
                    title='Menu'
                    onPress={() => navigation.navigate('Menu')}
                />
            </View>
        )
    }
}
const mapStateToProps = ({ auth }, ownProps) => {
    const { loggedIn } = auth
    return { loggedIn }
}

export default connect(mapStateToProps)(MapScreen)