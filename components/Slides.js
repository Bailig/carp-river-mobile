import React from 'react'
import { View, Text, ScrollView, Dimensions } from 'react-native'

import { RoundedButton } from './RoundedButton'
import { white, blue } from './colors'

const SCREEN_WIDTH = Dimensions.get('window').width

export const Slides = ({ data, onComplete }) => {
    const { textStyle, slideStyle } = styles

    const renderButton = (index) => {
        if (index === data.length - 1) {
            return (
                <RoundedButton 
                    title='Get Started!'
                    onPress={onComplete}
                    backgroundColor={blue}
                />
            )
        }
    }

    const renderSlides = () => {
        return data.map((slide, index) => {
            return (
                <View
                    key={index}
                    style={[
                        slideStyle,
                        { backgroundColor: slide.backgroundColor }
                    ]}
                >
                    <Text style={textStyle}>{slide.text}</Text>
                    {renderButton(index)}
                </View>
            )
        })
    }

    return (
        <ScrollView
            horizontal
            style={{ flex: 1 }}
            pagingEnabled
        >
            {renderSlides()}
        </ScrollView>
    )
}

const styles = {
    slideStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH,
        paddingLeft: 20,
        paddingRight: 20
    },
    textStyle: {
        fontSize: 30,
        textAlign: 'center',
        color: white
    }
}