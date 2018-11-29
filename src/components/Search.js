import React, { Component } from 'react'
import { View, Text, Platform, TextInput, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../helpers/colors';

class Search extends Component {

    constructor() {
        super()
        this.state = {
            inputSearchText: ''
        }
    }

    render() {
        return (
            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 18, marginBottom: Platform.OS == 'ios' ? 8 : 0 }}>
                {
                    Platform.OS == 'android' &&
                    <TouchableOpacity onPress={this.props.drawerOnPress} style={{ flex: 1, justifyContent: 'center' }}>
                        <Icon name="bars" size={16} color="white" />
                    </TouchableOpacity>
                }
                <InputSearch
                    onChangeText={(text) => { this.props.onChangeText(text); this.setState({ inputSearchText: text }) }}
                    value={this.props.value}
                    cancelOnPress={this.props.cancelOnPress}
                    onSubmitEditing={this.props.onSubmitEditing}
                />

                {
                    Platform.OS == 'ios' &&
                    this.state.inputSearchText.length > 0 &&
                    <TouchableOpacity onPress={this.props.cancelOnPress}>
                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
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
                // marginHorizontal: Platform.OS == 'ios' ? 16 : 15,
                alignItems: 'center',
                paddingHorizontal: 4,
                flexDirection: 'row',
                backgroundColor: 'rgba(218,218,218,1)',
                height: 33,
                borderRadius: Platform.OS == 'ios' ? 8 : 4,
            }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Icon name="search" size={16} color='rgba(130,130,130,1)' />
                </View>
                <View style={{ flex: 7, justifyContent: 'center' }}>
                    <TextInput
                        placeholder='Search'
                        placeholderTextColor='rgba(130,130,130,1)'
                        onSubmitEditing={() => { this.props.onSubmitEditing }}
                        returnKeyType="search"
                        ref={(input) => { this.pesquisarInput = input }}
                        onChangeText={(text) => { this.props.onChangeText(text); this.setState({ value: text }) }}
                        style={{
                            width: '100%',
                            paddingVertical: 8,
                            // height: 10
                        }}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <View style={{ flex: 1.2, alignItems: 'center', justifyContent: 'center' }}>
                    {
                        this.state.value.length > 0 &&
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
                    }
                </View>
            </View>
        )
    }
}

export default Search