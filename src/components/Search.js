import React, { Component } from 'react'
import { View, Text, Platform, TextInput, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

class Search extends Component {

    render() {
        return (
            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', marginHorizontal: 8 }}>
                <View style={{ flex: 8, alignItems: 'center', marginLeft: 4, paddingRight: 8, flexDirection: 'row', backgroundColor: 'rgba(255,255,255,0.6)', borderRadius: 4 }}>
                    <View style={{ flex: 1, alignItems: 'center', marginLeft: 8 }}>
                        <Icon name="search" size={16} color="white" />
                    </View>
                    <View style={{ flex: 8 }}>
                        <TextInput
                            placeholder='Pesquisar'
                            placeholderTextColor='white'
                            ref={(input) => { this.pesquisarInput = input }}
                            onChangeText={(text) => { this.props.onChangeText(text) }}
                            style={{
                                width: '100%',
                                borderRadius: 4,
                                height: 35,
                                paddingVertical: 4,
                                color: 'white'
                            }}
                            underlineColorAndroid='transparent'
                        />
                    </View>
                    <View style={{ flex: 1.2, alignItems: 'center' }}>
                        <Icon name="times-circle" size={16} color="white" style={{ padding: 8 }} onPress={() => { this.pesquisarInput.setNativeProps({ text: '' }) }} />
                    </View>
                </View>
                <TouchableOpacity onPress={this.props.cancelOnPress}>
                    <View style={{ flex: 2, paddingHorizontal: 8, justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                        <Text style={{ color: 'white' }}>Cancelar</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Search