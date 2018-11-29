import React, { Component } from 'react'
import { View, Text, Platform, TextInput, TouchableOpacity } from 'react-native'

class DrawerContent extends Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Drawer Content</Text>
            </View>
        )
    }
}

export default DrawerContent