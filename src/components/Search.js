import React, { Component } from 'react'
import { View, Text, Platform, TextInput, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../helpers/colors';

class Search extends Component {

    render() {
        return (
            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', marginHorizontal: 6, marginBottom: Platform.OS == 'ios' ? 8 : 0 }}>
                {
                    Platform.OS == 'android' &&
                    <TouchableOpacity onPress={this.props.drawerOnPress}>
                        <View style={{ flex: 1, paddingHorizontal: 8, justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                            <Icon name="bars" size={16} color="white" />
                        </View>
                    </TouchableOpacity>
                }
                <InputSearch
                    onChangeText={this.props.onChangeText}
                    value={this.props.value}
                    cancelOnPress={this.props.cancelOnPress}
                />

                {
                    Platform.OS == 'ios' &&
                    <TouchableOpacity onPress={this.props.cancelOnPress}>
                        <View style={{ flex: 2, paddingHorizontal: 8, justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                            <Text style={{ fontSize: 15, color: 'white' }}>Cancelar</Text>
                        </View>
                    </TouchableOpacity>
                }
            </View>
        )
    }
}

class InputSearch extends Component {

    constructor() {
        super()
        this.state = {
            value: ''
        }
    }
    render() {
        return (
            <View style={{
                flex: Platform.OS == 'android' ? 7 : 8,
                marginLeft: Platform.OS == 'ios' ? 18 : 0,
                marginRight: Platform.OS == 'android' ? 15 : 0, 
                alignItems: 'center', 
                paddingHorizontal: 4, 
                flexDirection: 'row', 
                backgroundColor: 'rgba(218,218,218,1)', 
                borderRadius: Platform.OS == 'ios' ? 8 : 4,
            }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Icon name="search" size={16} color='rgba(130,130,130,1)' />
                </View>
                <View style={{ flex: 7 }}>
                    <TextInput
                        placeholder='Pesquisar'
                        placeholderTextColor='rgba(130,130,130,1)'
                        onSubmitEditing={() => { this.props.onSubmitEditing }}
                        ref={(input) => { this.pesquisarInput = input }}
                        onChangeText={(text) => { this.props.onChangeText(text); this.setState({ value: text }) }}
                        style={{
                            width: '100%',
                            // height: 20,
                            paddingVertical: 4,
                            color: 'white',

                        }}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <View style={{ flex: 1.2, alignItems: 'center' }}>
                    <Icon
                        name="times-circle"
                        size={16}
                        color='rgba(130,130,130,1)'
                        style={{ padding: 8 }}
                        onPress={() => {

                            console.log(this.state)

                            if (this.state.value == '') {
                                this.props.cancelOnPress()
                            } else {
                                this.props.onChangeText('')
                                this.setState({ value: '' })
                                this.pesquisarInput.setNativeProps({ text: '' })
                            }
                        }}
                    />
                </View>
            </View>
        )
    }
}

export default Search