import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

import { setHomeTitle } from '../actions/HomeActions'

class Home extends Component {

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

const mapActionsToProps = { setHomeTitle };

export default connect(mapStateToProps, mapActionsToProps)(Home);
