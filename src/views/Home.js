import React, { Component } from 'react';
import { Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { setHomeTitle, setSearchText } from '../actions/HomeActions'
import Search from '../components/Search';



class Home extends Component {



    componentDidMount() {
        this.props.navigation.setParams({ searchNavBar: <Search onChangeText={this.props.setSearchText} /> })
    }

    render() {

        let { HomeReducer } = this.props
        let { homeTitle } = HomeReducer

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                
                <Text>{homeTitle}</Text>
                <Button title='Change home text' onPress={() => { this.props.setHomeTitle() }} />
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    HomeReducer: state.HomeReducer
});

const mapActionsToProps = { setHomeTitle, setSearchText };

export default connect(mapStateToProps, mapActionsToProps)(Home);
