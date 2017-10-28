import React from 'react'

import { Slides } from '../components'
import { green, blue, orange, pink } from '../components/colors'

const slideData = [
    { 
        text: 'Welcome to Carp River Mobile App',
        backgroundColor: blue
    },
    { 
        text: 'Explore',
        backgroundColor: green
    },
    { 
        text: 'Collect',
        backgroundColor: pink
    },
    { 
        text: 'Share',
        backgroundColor: orange
    }
]

export default ({ navigation }) => {
    return (
        <Slides data={slideData} onComplete={() => navigation.navigate('Auth')} />
    )
}
