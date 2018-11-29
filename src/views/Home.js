import React, { Component } from 'react';
import { Text, View, Button, StatusBar, TouchableOpacity, Keyboard } from 'react-native';
import { connect } from 'react-redux';

import { DrawerActions } from 'react-navigation-drawer';

import { setHomeTitle, setSearchText } from '../actions/HomeActions'
import Search from '../components/Search';

class Home extends Component {

    componentDidMount() {

        console.log(this.props.HomeReducer)

        this.props.navigation.setParams({
            searchNavBar:
                <Search
                    // 
                    drawerOnPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}
                    value={this.props.HomeReducer.searchText}
                    cancelOnPress={() => { Keyboard.dismiss() }}
                    onChangeText={(text) => { this.props.setSearchText(text) }}
                />
        })
    }

    render() {

        let { HomeReducer } = this.props
        let { homeTitle } = HomeReducer

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <StatusBar barStyle='light-content' />
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
