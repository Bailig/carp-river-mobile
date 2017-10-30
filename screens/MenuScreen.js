import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import * as actions from '../actions'
import { IconButton, BackButton, TextButton } from '../components'
import { black } from '../components/colors'

const MenuScreen = ({ navigation, logoutUser }) => {
    const { navigate, goBack, state } = navigation

    return (
        <View style={{ flex: 1 }}>
            <View 
                style={{ 
                    flex: 0.7, 
                    justifyContent: 'flex-start', 
                    alignItems: 'flex-end', 
                    paddingTop: 60 
                }}
            >

                <TextButton
                    iconRight={{ name: 'logout', type: 'material-community', color: black }}
                    title='Log out' 
                    onPress={logoutUser}
                />
            </View>

            <View 
                style={{ 
                    flex: 0.3, 
                    flexDirection: 'row', 
                    justifyContent: 'space-around', 
                    alignItems: 'flex-start', 
                    paddingBottom: 40, 
                    paddingLeft: 20, 
                    paddingRight: 20 
                }} 
            >
                <IconButton
                    containerStyle={{ alignSelf: 'flex-end' }}
                    name='user-secret'
                    type='font-awesome'
                    onPress={() => navigate('Profile', { menuKey: state.key })}
                />

                <IconButton
                    name='camera-enhance'
                    type='material-community'
                    onPress={() => navigate('Camera', { menuKey: state.key })}
                />

                <IconButton
                    containerStyle={{ alignSelf: 'flex-end' }}
                    name='information'
                    type='material-community'
                    onPress={() => navigate('Info', { menuKey: state.key })}
                />
            </View>
            <BackButton onPress={() => goBack()} />
        </View>
    )
}


export default connect(null, actions)(MenuScreen)